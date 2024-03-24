const mongoose = require("mongoose");

const Blog = mongoose.Schema({
  image: {
    type: String,
  },
  sections: [
    {
      title: {
        type: String,
        required: true,
      },
      para: {
        type: String,
        required: true,
      },
    },
  ],
  UserName: {
    type: String,
    required: true,
  },
});

const Blogs = mongoose.model("Blogs", Blog);

module.exports = Blogs;
