const mongoose= require('mongoose');


const userModel = mongoose.model('user',{
    firstName: {
        type: String, 
        minLenght: [3, 'Min 3 Charaters'],
        maxLength: [100, 'Max 100 Charaters'],
        required: [true, 'First name is mandatory']},
    lastName: {
        type: String, 
        required: [true, 'Last name is required']},
    email: {
        type: String,
        unique: true, 
        required: [true, 'Email is mandatory']},
    password: {
        type: String, 
        required: [true, 'Password is mandatory']},
    gender: String,
    active: {type: Boolean, default: 1},
    gender: Number,
    mobile: {
        type: String,
        validate: {
            validator: v => /[0-9]{10}/.test(v),
            message: () => 'Invalid phone number'
        }
    },
    qualification: Number,
    degree: Number,
    image: String,
    skills: [String],
    passout: Number,
    createdAt: Date,
    updatedAt: {type:Date, default: Date.now }

});

module.exports = userModel;
