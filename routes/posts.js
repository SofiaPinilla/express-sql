const express = require('express');
const PostController = require('../controllers/PostController');
const router = express.Router();

router.post('/addPost2',PostController.create)

module.exports = router;
