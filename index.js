const express = require("express");
const app = express();
const port = 3000;
// const mysql = require("mysql2");

app.use(express.json());
app.use('/posts', require('./routes/posts'));//establezo un prefijo para todas las rutas
// y me importo las rutas
// app.use('/users',require('./routes/users'))

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "expressDB",
// });

// db.connect();

// app.post("/addPost2", (req, res) => {
//   let post = { title: req.body.title, body: req.body.body };
//   let sql = "INSERT INTO posts SET ?";
//   db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post added...");
//   });
// });


app.listen(port, () => console.log(`servidor levantado en el puerto ${port}`));
