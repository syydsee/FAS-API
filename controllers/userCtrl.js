const userRepository = require('../repositories/userRepository'); 
const register = async(req,res) => {
    try{
        const data = req.body;
        console.log(data, 'body');
        await userRepository.add(data);
        res.status(201);
        res.send();
    }catch(e) {
        console.log(e);
        res.status(500);
        res.send('Instenal Server Error');
    }
};

module.exports = {register};