const { User, FishTopic, VampTopic } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {

                const userData = await User.findOne({ _id: context.user_id })
                    .select('-__v -password')
                    .populate('fishTopics')
                    .populate('vampTopics');

                return userData
            }

            throw new AuthenticationError('Not Logged In');
        },
        fishTopics: async (parent, { username }) => {
            const params = username ? { username } : {};
            return FishTopic.find().sort({ createdAt: -1 });
        },
        fishTopic: async (parent, { _id }) => {
            return FishTopic.findOne({ _id });
        },

        vampTopics: async (parent, { username }) => {
            const params = username ? { username } : {};
            return VampTopic.find().sort({ createdAt: -1 });
        },
        vampTopic: async (parent, { username }) => {
            return VampTopic.findOne({ _id });
        },

        //get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('fishTopics')
                .populate('vampTopics')
        },
        //get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('fishTopics')
                .populate('vampTopics')
        },
        //stripe checkout
        checkout: async (parent, args, context) => {
            const order = new Order({ products: args.products });
            const { products } = await order.populate('products');
            const line_items = [];
            const url = new URL(context.headers.referer).origin;
            for (let i = 0; i < products.length; i++) {
              // generate product id
              const product = await stripe.products.create({
                name: products[i].name,
                description: products[i].description,
                images: [`${url}/images/${products[i].image}`]
              });
            
              // generate price id using the product id
              const price = await stripe.prices.create({
                product: product.id,
                unit_amount: products[i].price * 100,
                currency: 'usd',
              });
            
              // add price id to the line items array
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: 'https://example.com/cancel'
              });
              
              return { session: session.id };

        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        addFishTopic: async (parent, args, context) => {
            if (context.user) {
                const fishTopic = await FishTopic.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { fishTopics: fishTopic._id } },
                    { new: true }
                );

                return fishTopic;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        addVampTopic: async (parent, args, context) => {
            if (context.user) {
                const vampTopic = await VampTopic.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { vampTopics: vampTopic._id } },
                    { new: true }
                );

                return vampTopic;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        addFishTopicReaction: async (parent, { fishTopicId, fishTopicReactionBody }, context) => {
            if (context.user) {
                const updatedFishTopic = await FishTopic.findOneAndUpdate(
                    { _id: fishTopicId },
                    { $push: { fishTopicReactions: { fishTopicReactionBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedFishTopic;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        addVampTopicReaction: async (parent, { vampTopicId, vampTopicReactionBody }, context) => {
            if (context.user) {
                const updatedVampTopic = await VampTopic.findOneAndUpdate(
                    { _id: vampTopicId },
                    { $push: { vampTopicReactions: { vampTopicReactionBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedVampTopic;
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }

}

module.exports = resolvers;