const jwt = require("jsonwebtoken");

//to verify the jwt token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  // console.log(req.headers.token)
  if (authHeader) {
    const token = authHeader.split(" ")[1]; //because in auth header we give "BEARER sdbajsfhb....". We are retriving the token only by removing "BEARER"
    console.log(token)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      //verify the bearer of token is same or not
      if (err) res.status(403).json("Token is not valid!");
      req.user = user; //if same then
      next(); //leads the function and goes to user.js in routes to verify
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

//to verify and authorize with and without Admin
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

//to verify token of admin
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
