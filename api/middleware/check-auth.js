const jwt = require("jsonwebtoken");
const sha256 = require("sha256");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const name = req.headers.authorization.split(" ")[2];
    console.log(token, name)
    const decodedToken = jwt.verify(token, sha256(name));
    req.userData = { name: decodedToken.name, userId: decodedToken.userId };
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
