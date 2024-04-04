const reffer = require("express").Router();
const Users = require("../models/UserSignup");

reffer.put("/reffer/:userid", async (req, res) => {
  try {
    const userId = req.params.userid;
    const User = await Users.findById(userId);
    User.Reffer += 1;
    await User.save();
    res.send(User);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  reffer,
};
