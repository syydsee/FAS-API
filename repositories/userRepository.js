const userModel = require('../models/userModel')
const add = (data) => {
    const userToAdd = new userModel(data);
    return user.save(); //async
};

module.exports = {add};
