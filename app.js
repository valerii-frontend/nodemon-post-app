const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes.js");

// express app
const app = express();
// connect to mongo DB
const dbURI = process.env.MONGOURI;
const port = process.env.PORT || 5001;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
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
