const router = require("express").Router();
const User = require("./../models/User"); //from the user models (user schema)
const CryptoJS = require("crypto-js"); //to encrypt user password
const jwt = require("jsonwebtoken");

//-----------------------REGISTER------------------------------------

//we are using async/await because when we try to save the username, email and password
//into the db using save method, there will be a delay in milliseconds.
//This may distrupt the process. So to avoid this we use async/await

//we basically use crud operation using async and await function with try and catch block like the below form.
router.post("/register", async (req, res) => {
  const newUser = new User({
    // we are sending this to the DB
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(), // this encrypts the password and saves in db.
    //The first argument contains the user password and
    //the second argument contains the password secret key present inside the dotenv file.
    //This helps in encryption using AES.
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //200 -> success, 201 -> successfully added. .json to convert the result of savedUser to json
  } catch (err) {
    res.status(500).json(err);
  }
}); //user wants to send username , password, email and all for authentication

//-----------------------LOGIN------------------------------------

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }); //finds the given username in the db
    !user && res.status(401).json("Wrong credentials!"); //if wrong username is given
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    ); //decrypts the password from the located username details in user
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8); //to convert the decrypted password into the string
    originalPassword !== req.body.password && //if wrong password is given
      res.status(401).json("Wrong Credentials!");
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" } //we cannot access this accesstoken again . So we need to do new login again.
    );
    const { password, ...others } = user._doc; //this will hide the password in the json response of successful authentication.
    res.status(200).json({ ...others, accessToken }); //use accesstoken under an object
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
