const express = require("express");
const router = express.Router();

const {
  blog_index,
  blog_blogs,
  blog_create_get,
  blog_delete,
  blog_about,
  blog_create,
} = require("../controllers/blogController.js");

router.post("/blogs", blog_blogs);
router.get("/blogs/:id", blog_create_get);
router.delete("/blogs/:id", blog_delete);
router.get("/about", blog_about);
router.get("/blogs", blog_index);
router.get("/create", blog_create);

router.get("/", (_req, res) => {
  res.redirect("/blogs");
  //   console.log(res.statusCode);
});

module.exports = router;
