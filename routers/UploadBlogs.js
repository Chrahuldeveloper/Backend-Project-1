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

const userReqCounts = new Map();
const maxreq = 5;
const Timelimit = 60 * 60 * 10000;

blogUpload.post("/blogs/:userjwt", async (req, res) => {
  try {
    const token = req.params.userjwt;
    if (!token) {
      res.status(404).send("You must be logged in");
    }
    // Protect the server from spamming reqs
    const reqData = userReqCounts.has(token);
    if (reqData) {
      const currentTime = new Date().getTime();
      if (currentTime - reqData.startTime >= Timelimit) {
        reqData.startTime = currentTime;
        reqData.count = 1;
      } else if (reqData.counter > maxreq) {
        res.status(429).json({ error: "Too many requests" });
      }
    } else {
      const { Tittle, image, Blog } = await req.body;
      const blog = await new Blogs({
        Tittle,
        image,
        Blog,
      });
      await blog.save();
      userReqCounts.set(token, { startTime: new Date().getTime(), count: 1 });
      res.json({ messgae: "sucess" }).status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = { blogUpload };
