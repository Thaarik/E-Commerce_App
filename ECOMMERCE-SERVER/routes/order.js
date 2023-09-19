const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Order = require("../models/Order");

// REST API example below

// router.get("/usertest", (req, res) => { //get method
//   res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {//post method
//   const username = req.body.username;
//   console.log(username);
//   res.send("your username is: " + username);
// });

//Create/ ADD new Order (only admin)

router.post("/", verifyToken, async (req, res) => {

  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to UPDATE cart
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}); //because we are updating

//to DELETE order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted ...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET user orders
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findById({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Monthly income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date(); //if this 1st sept
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); //then this is 1st aug
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); //then this is 1st july

  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: { month: { $month: "$createdAt" }, sales: "$amount" },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
