const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerSchema = new Schema({
    orgName : {
        type:String
    },
    Address:{
        typr:String
    },
    Aadhaar:{
        type:Number
    },
    Profession:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'Employee'
    }
})

module.exports = mongoose.model('Employer',employerSchema);