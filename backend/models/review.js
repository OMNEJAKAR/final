const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name:String,
    comment:String,
    rating:Number
})

module.exports = mongoose.model('Review',reviewSchema);