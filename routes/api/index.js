const express = require('express');
const router = express.Router();
const flashcardsApi = require('./flashcards');
const userApi = require('./user');
router.use('/flashcards', flashcardsApi);
router.use('/user', userApi);
module.exports = router;
