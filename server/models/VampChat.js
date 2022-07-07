const { Schema, model } = require('mongoose');
const vampChatReactionSchema = require('./VampChatReaction');
const dateFormat = require('../utils/dateFormat');

const vampChatSchema = new Schema(
    {
        vampChatText: {
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
        vampChatReactions: [vampChatReactionSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

vampChatSchema.virtual('vampChatReactionCount').get(function () {
    return this.vampChatReactions.length;
});

const VampChat = model('VampChat', vampChatSchema);

module.exports = VampChat;