const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogInterface = {
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
};
const blogSchema = new Schema(blogInterface, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
