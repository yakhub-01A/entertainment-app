const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    comments: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model("feed", feedbackSchema);
