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

const getUsers = () => {
    const projection = {__v: 0,_id: 0, password: 0};
    const filter = {};
    return UserModel.find(filter, projection);
}

module.exports = {add, update, getUsers};
