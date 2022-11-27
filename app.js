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

//  middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use(blogRoutes);
// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});
