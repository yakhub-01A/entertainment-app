const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var comicSchema = new Schema({
    title: String,
    
    imageURL: String  
});

module.exports = mongoose.model("comics", comicSchema);