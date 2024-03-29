const mongoose = require("mongoose");
const User = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Profession: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", User);

module.exports = UserModel;
