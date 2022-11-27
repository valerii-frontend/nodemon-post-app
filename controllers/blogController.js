const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};
const blog_blogs = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((e) => console.log(e));
};
const blog_create_get = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((e) => res.render("404", { title: "Blog not found" }));
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((e) => console.log(e));
};
const blog_about = (req, res) => {
  res.render("about", { title: "About" });
};

const blog_create = (req, res) => {
  res.render("blogs/create", { title: "Create" });
};
module.exports = { blog_index, blog_blogs, blog_create_get, blog_delete, blog_about, blog_create };
