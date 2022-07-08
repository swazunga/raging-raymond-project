const { Schema, model } = require('mongoose');
const fishTopicReactionSchema = require('./FishTopicReaction')
const dateFormat = require('../utils/dateFormat');

const fishTopicSchema = new Schema(
    {
        fishTopicText: {
            type: String,
            required: 'You need to add a fish tale!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        fishTopicReactions: [fishTopicReactionSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

fishTopicSchema.virtual('fishTopicReactionCount').get(function () {
    return this.fishTopicReactions.length;
});

const FishTopic = model('FishTopic', fishTopicSchema);

module.exports = FishTopic;