const express = require('express');

const userController = require('./controller');
const router = express.Router();

router.post('/express/users', userController.createUser);

router.get('/express/users', userController.getAllUser);

router.put('/express/users/:id', userController.updateUser);

router.delete('/express/users/:id', userController.deleteUser);


module.exports = router;