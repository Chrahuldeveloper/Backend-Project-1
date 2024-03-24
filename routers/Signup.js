const signUpRouter = require("express").Router();
const UserModel = require("../models/UserSignup");
const { createHmac } = require("crypto");

const hashingUser = (data) => {
  try {
    const hash = createHmac("sha256", data).digest("hex");
    return hash;
  } catch (error) {
    console.log(error);
  }
};

// saving user in db
signUpRouter.post("/signup", async (req, res) => {
  try {
    const { Name, age, Phone, location, Profession, Address } = await req.body;
    const User = new UserModel({
      Name,
      age,
      Phone,
      location,
      Profession,
      Address,
    });
    await User.save();
    const userJwt = hashingUser(Name + Phone + Profession);
    res.send(userJwt);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  signUpRouter,
};
