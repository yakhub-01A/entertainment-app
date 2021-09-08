const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicsSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    music: {
      type: String,
      required: true
    },
  });

  module.exports = mongoose.model("music", musicsSchema);
