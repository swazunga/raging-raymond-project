const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const vampChatReactionSchema = new Schema(
    {
        vampChatReactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = vampChatReactionSchema;