const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.post('/signup', userCtrl.register);
router.put('/:email', userCtrl.update);
router.get('/page/:page/size/:size', userCtrl.getUsers);
router.get('/:email', userCtrl.getUserByEmail);


module.exports = router;
