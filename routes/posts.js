const express = require('express');
const PostController = require('../controllers/PostController.js');
const router = express.Router();

router.post('/addPost2',PostController.create)
router.get("/createdb", PostController.createDB);
router.get("/createtable", PostController.createTable);
router.post("/addPost", PostController.create2);
router.get("/getPosts", PostController.getPosts);
router.get("/id/:id", PostController.getPostById);
router.put("/id/:id",PostController.updateById);
router.delete("/delete/:id", PostController.deleteById);

module.exports = router;
