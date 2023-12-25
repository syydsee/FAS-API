const mongoose= require('mongoose');
const config = require('../config');

const get = (req, res) => {
    res.status(200);
    res.send('FAS API');
};

const health = async(req, res)=>{
    try{
        await mongoose.connect(config.dbConStr)
        res.status(201);
        res.json({db:'Up'}); 
        mongoose.connection.close();
    }catch(e){
        res.status(500);
        res.send('Internal Server Error');
    }
    // mongoose.connect(config.dbConStr)
    //     .then(()=>{
    //         res.status(201);
    //         res.json({db:'Up'});
    //     })
    //     .catch(err =>{
    //         res.status(500);
    //         res.send('Internal Server Error');
    //     });
    
}; 

module.exports = {get,health};
