const express = require("express");
var router = express.Router();
const [createUser] =  require("../Controller/CreateUser");


router.post("/", async function (req, res, next) { 
  
    const newUser = await createUser(req.body);
    res.send(newUser);
});

module.exports = router;