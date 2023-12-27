const UserModel = require('../models/userModel')

const add = (data) => {
    const user = new UserModel(data);
    return user.save(); //async
};

const update= (email, data) => {
    const { firstName, lastName, mobile, 
        qualification, degree, passout, 
        skills, gender} = data;
    return UserModel.updateOne({email}, {
        $set: {
            firstName,
            lastName,
            mobile,
            gender,
            qualification,
            degree,
            skills,
            passout,
            updatedAt:Date.now()
        }
    });
};

module.exports = {add, update};
