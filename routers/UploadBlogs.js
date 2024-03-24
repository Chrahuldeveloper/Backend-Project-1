const blogUpload = require("express").Router();
const Blogs = require("../models/Blog");
const UserModel = require("../models/UserSignup");

blogUpload.get("/blogs/:userjwt", async (req, res) => {
  try {
    const token = req.params.userjwt;
    if (!token) {
      res.status(404).send("You must be logged in");
    } else {
      const getUser = await UserModel.findById(token);

      if (getUser.Blogs === undefined) {
        res.status(404).send("No Blogs found:(");
      } else {
        const userBlogs = await getUser.Blogs;
        res.json(userBlogs).status(200);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

blogUpload.post("/blogs/:userjwt", async (req, res) => {
  try {
    const token = req.params.userjwt;
    if (!token) {
      res.status(404).send("You must be logged in");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = { blogUpload };
