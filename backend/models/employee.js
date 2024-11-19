const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const Review  = require('./review');

const EmployeeSchema = new Schema({
    age:{
        type:Number,
    },
    phone: {
        type:Number,
    },
    email: {
        type:String,
    },
    gender: {
        type:String,
    },
    isEmployer:{
        type:Boolean
    },
    description:{
        type:String,
        default:"to be updated"
    },
    profession:{
        type:String,
        default:"to be updated"
    },
    address:{
        type:String,
        default:"to be updated"
    },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:'Review'
    }]
});

EmployeeSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Employee',EmployeeSchema);