const blogViews = require("express").Router();
const blogLikes = require("express").Router();
const Blogs = require("../models/Blog");

blogViews.put("/blog/views/:userid/:blogid", async (req, res) => {
  try {
    const blogId = req.params.blogid;
    const userId = req.params.userid;

    const blog = await Blogs.findById(blogId);

    if (!userId) {
      res.status(404).json({ message: "User Not found" });
    }

    if (!blog) {
      res.status(404).json({ message: "Blog not found:(" });
    }

    blog.views += 1;

    const updatedBlog = await blog.save();

    console.log(updatedBlog);
  } catch (error) {
    console.log(error);
  }
});

blogLikes.get("/blog/likes/:userid/:blogid", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  blogViews,
  blogLikes,
};
