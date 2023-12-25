const mongoose= require('mongoose');


const userModel = mongoose.model('user',{
    firstName: String,
    lastName: String,
    gender: String,
    password: String,
    active: Boolean,
    gender: Number,
    email: String,
    mobile: String,
    qualification: Number,
    degree: Number,
    image: String,
    skills: [String],
    passout: Number,
    createdAt: Date,
    updatedAt: Date

});

module.exports = userModel;
