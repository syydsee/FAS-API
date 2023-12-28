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

const getUsers = (pageIndex, pageSize) => {
    const projection = {__v: 0,_id: 0, password: 0};
    const filter = {};
    const skipRows = pageIndex * pageSize;
    return UserModel.find(filter, projection)
        .skip(skipRows)
        .limit(pageSize);
}

const getUserByEmail = (email) => {
    const projection = {__v: 0,_id: 0, password: 0};
    const filter = {email}
    return UserModel.findOne(filter, projection);
}

const getUserCount = () => {
    return UserModel.count();
    
}

module.exports = {
    add, 
    update, 
    getUsers, 
    getUserByEmail,
    getUserCount
};
