const { Schema, model } = require('mongoose');
const vampTopicReactionSchema = require('./VampTopicReaction');
const dateFormat = require('../utils/dateFormat');

const vampTopicSchema = new Schema(
    {
        vampTopicText: {
            type: String,
            required: 'You need to add a VAMP chat!',
            minlength: 1,
            naxlength: 280
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
        vampTopicReactions: [vampTopicReactionSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

vampTopicSchema.virtual('vampTopicReactionCount').get(function () {
    return this.vampTopicReactions.length;
});

const VampTopic = model('VampTopic', vampTopicSchema);

module.exports = VampTopic;