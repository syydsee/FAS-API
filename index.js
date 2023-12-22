const express = require('express');
const defaultRouter = require('./routes/defaultRouter');

const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.use('/', defaultRouter);
