const { signUpRouter } = require("./Signup");
const { blogUpload } = require("./UploadBlogs");
const { blogLikes, blogViews } = require("./BlogLikesViews");
const { reffer } = require("./Reffer");
module.exports = { signUpRouter, blogUpload, blogLikes, blogViews, reffer };
