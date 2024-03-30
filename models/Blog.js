const mongoose = require("mongoose");

const Blog = mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  views: {
    type: Number,
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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Comments",
    },
  ],
});

const Blogs = mongoose.model("Blogs", Blog);

module.exports = Blogs;
