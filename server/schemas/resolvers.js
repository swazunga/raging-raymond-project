const { User, FishTopic, VampTopic, Registrant } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log('context: ', context.user);
      if (context.user) {

        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('fishTopics')
          .populate('vampTopics');

        return userData
      }


      throw new AuthenticationError('Not Logged In');
    },
    fishTopics: async (parent, { username }) => {
      const params = username ? { username } : {};
      return FishTopic.find(params).sort({ createdAt: -1 });
    },
    fishTopic: async (parent, { _id }) => {

      const fishTopic = await FishTopic.findOne({ _id });


      return fishTopic
    },

    vampTopics: async (parent, { username }) => {
      const params = username ? { username } : {};
      const vampTopics = await VampTopic.find(params).sort({ createdAt: -1 });
      return vampTopics
    },
    vampTopic: async (parent, { _id }) => {
      const vampTopic = await VampTopic.findOne({ _id });
      return vampTopic
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
    registrants: async () => {
      return Registrant.find();
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
        console.log('updated fishtopic', updatedFishTopic)

        return updatedFishTopic;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    addVampTopicReaction: async (parent, { vampTopicId, vampTopicReactionBody }, context) => {
      console.log('vampTopicReactionBody: ', vampTopicReactionBody);
      console.log('vampTopicId: ', vampTopicId);
      if (context.user) {
        const updatedVampTopic = await VampTopic.findOneAndUpdate(

          { _id: vampTopicId },
          { $push: { vampTopicReactions: { vampTopicReactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        console.log('updatedVampTopic: ', updatedVampTopic);

        return updatedVampTopic;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    addRegistrant: async (parent, args, context) => {
      console.log("args", args);
      const registrant = await Registrant.create(args);
      console.log("registrant:", registrant);
      return registrant;
    }
  }
};

module.exports = resolvers;