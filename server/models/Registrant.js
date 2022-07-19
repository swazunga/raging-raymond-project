const { Schema, model } = require("mongoose");

const registrantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,

    trim: true,
  },

  participants: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Registrant = model("Registrant", registrantSchema);

module.exports = Registrant;
