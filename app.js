const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");

const blogRoutes = require("./routes/blogRoutes.js");

// express app
const app = express();
// connect to mongo DB
const dbURI =
  "mongodb+srv://valerii:zQBUJg0wwjdl3bRl@node-js-testing.8xjvnkn.mongodb.net/my-node?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for request
// simple log of request
// app.use((req, res, next) => {
//   console.log("--------------------------------------");
//   console.log(`host: ${req.hostname}`);
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   next();
// });

//  middleware & static files

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 4",
//     snippet: "about my new blog 4",
//     body: "more about my new blog 4",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get("/all-blogs", (_req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
// app.get("/single-blog", (_req, res) => {
//   Blog.findById("6376af8ec58c2eb2b0930985")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// routes
app.use(blogRoutes);
// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});
