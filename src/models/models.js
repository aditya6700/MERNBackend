const mongoose = require('mongoose');
const validator = require('validator');

mongoose.pluralize(null);

const mySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validator(val){
            if(!validator.isEmail(val)){
                throw new Error("enter a valid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: [10,"enter 10 valid phone number"],
    },
    message:{
        type: String,
        required: true,
        minlength: 3
    },
    date:{
        type: Date,
        default: Date.now
    }
});


const FeedBack = mongoose.model('FeedBack',mySchema);


module.exports = FeedBack;