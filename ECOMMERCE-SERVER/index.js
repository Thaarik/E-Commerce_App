const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
//bring dotenv content into the moongose connect
dotenv.config();

// connecting moongose
mongoose
  .connect(process.env.MONGO_URL) //enter your password and database name
  .then(() => console.log("DB Connection Successful")) //it is a promise so so ctach error
  .catch((err) => {
    console.log(err);
  });

app.use(cors()) //cors function
app.use(express.json()) //This is a middleware between request and response where it converts the body into json. 
                        //We  can pass any json file to post

app.use("/api/auth", authRoute); //from routes -> auth.js
app.use("/api/users", userRoute); //from routes -> user.js
app.use("/api/products",productRoute); //from reoutes -> product.js
app.use("/api/carts",cartRoute); //from reoutes -> cart.js
app.use("/api/orders",orderRoute); //from reoutes -> order.js
app.use("/api/checkout",stripeRoute); //from reoutes -> stripe.js

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server running");
});
