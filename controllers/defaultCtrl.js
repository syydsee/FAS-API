const get = (req, res) => {
    res.status(200);
    res.send('FAS API');
};

const health = (req, res)=>{
    res.status(201);
    res.json({status:'Up'});
}; 

module.exports = {get,health};
