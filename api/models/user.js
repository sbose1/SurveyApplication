const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    role: {
        type:String
    },
    score: {
            type:Number
        },
    survey: [
                {
                   type: mongoose.Schema.Types.ObjectId,
                   ref: "Question"
                }
             ],
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    name: {
    	type: String,
        required: true},
     age: {
     	type: Number
     },
     weight: {
        type: Number
     },
     address:{
       type:String
     }
});

module.exports = mongoose.model('User', userSchema);