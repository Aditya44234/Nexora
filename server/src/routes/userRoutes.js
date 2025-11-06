const express = require('express')

const router = express.Router();


const { createUser, getUser } = require('../controllers/userController');

//  Create a fresh user, if alreaddy exists it return the mesage 
router.post('/', createUser);

//  To  get that user by the id
router.get('/:id', getUser);


module.exports = router;

