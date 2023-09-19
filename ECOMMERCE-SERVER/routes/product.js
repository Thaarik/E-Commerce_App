const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const Product = require("../models/Product");


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

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  //only admin can create new product
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to UPDATE product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}); //because we are updating

//to DELETE product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted ...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET Product
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET ALL Products
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const queryNew = req.query.new; //if we give query like -> localhost:5000/api/products?new=true
  const queryCategory = req.query.category; //if we give query like -> localhost:5000/api/products?category=tshirt
  try {
    let products;
    if(queryNew){
        products = await Product.find().sort({createdAt:-1}).limit(5) //give first 5 new products
    }else if(queryCategory){
        products = await Product.find({categories:{ //gives products of category of type present in the params
            $in : [queryCategory],
        }})
    }else{
        products = await Product.find();
    }

   
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
