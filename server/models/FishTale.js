const { Schema, model } = require('mongoose');
const fishTaleReactionSchema = require('./FishTaleReaction')
const dateFormat = require('../utils/dateFormat');

const fishTaleSchema = new Schema(
    {
        fishTaleText: {
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
        fishTaleReactions: [fishTaleReactionSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

fishTaleSchema.virtual('fishTaleReactionCount').get(function () {
    return this.fishTaleReactions.length;
});

const FishTale = model('FishTale', fishTaleSchema);

module.exports = FishTale;