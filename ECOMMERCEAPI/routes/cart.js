const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Cart = require("../models/Cart");


// REST API example below

// router.get("/usertest", (req, res) => { //get method
//   res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {//post method
//   const username = req.body.username;
//   console.log(username);
//   res.send("your username is: " + username);
// });

//Create/ ADD new product (only admin)

router.post("/", verifyToken, async (req, res) => {

  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to UPDATE cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
}); //because we are updating

//to DELETE cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted ...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findById({userId: req.params.userId});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET ALL 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
