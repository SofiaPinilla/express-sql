const db = require("../config/database.js");

const PostController = {
  create(req, res) {
    let post = { title: req.body.title, body: req.body.body };
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  },
  createDB(req, res) {
    let sql = "CREATE DATABASE expressDB";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  },
  createTable(req, res) {
    let sql =
      "CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  },
  create2(req, res) {
    let sql = `INSERT INTO posts (title, body) values
        ('${req.body.title}', '${req.body.body}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  },
  getPosts(req, res) {
    let sql = "SELECT * FROM posts";
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  },
  getPostById(req, res) {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  updateById(req, res) {
    let newTitle = req.body.title;
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Post updated...");
    });
  },
  deleteById(req, res) {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Post deleted");
    });
  }
};

module.exports = PostController;
