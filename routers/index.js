const { signUpRouter } = require("./Signup");
const { blogUpload } = require("./UploadBlogs");
const { blogLikes, blogViews } = require("./BlogLikesViews");

module.exports = { signUpRouter, blogUpload, blogLikes, blogViews };
