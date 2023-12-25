const userRepository = require('../repositories/userRepository'); 

const alreadyExists = (e)=>e.message && e.message.indexOf('dubicate key') > -1;

const hasErrors = (e)=>e._message==='user validation failed';

const handleErrors=(e,res)=>{
    if (alreadyExists(e)) 
        res.status(409).send('User already exists'); 
    else if (hasErrors(e))
        res.status(400).json(e.errors);
    else
        res.status(500).send('Internal Server Error');
}

const register = async(req,res) => {
    try{
        const data = req.body;
        data.createdAt = Date.now;
        console.log(data, 'body');
        await userRepository.add(data);
        res.status(201);
        res.send();
    }catch (e) {
        handleErrors(e, res);
    }
};

module.exports = {register};