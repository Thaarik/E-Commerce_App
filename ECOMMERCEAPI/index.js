const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

//bring dotenv content into the moongose connect
dotenv.config();

// connecting moongose
mongoose
  .connect(process.env.MONGO_URL) //enter your password and database name
  .then(() => console.log("DB Connection Successful")) //it is a promise so so ctach error
  .catch((err) => {
    console.log(err);
  });

app.use(express.json()) //we  can pass any json file to post

app.use("/api/users", userRoute); //from routes -> user.js

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server running");
});
