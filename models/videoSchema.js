const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: String,
    
    video: String  
});

module.exports = mongoose.model("videos", videoSchema);