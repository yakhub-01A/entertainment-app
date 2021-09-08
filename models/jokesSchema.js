const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const jokesSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  joke: {
    type: String,
    required: true
  },
});


module.exports = mongoose.model("jokes", jokesSchema);
