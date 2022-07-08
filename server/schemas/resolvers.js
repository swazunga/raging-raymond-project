const { User, FishTopic, VampTopic } = require('../models');

const resolvers = {
    Query: {
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
        }

    },

}

module.exports = resolvers;