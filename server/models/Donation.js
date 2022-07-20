const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
  donationDate: {
    type: Date,
    default: Date.now
  },
  amount:
    {
      type: Schema.Types.Number
    },
    name:
    {
      type: Schema.Types.String
    }

});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;