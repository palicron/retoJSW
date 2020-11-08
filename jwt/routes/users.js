var express = require('express');
var router = express.Router();
const [createUser,getusers] =  require("../Controller/CreateUser");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const newUser = await getusers();
  res.send(newUser);
});

router.post("/newUser", async function (req, res, next) { 

  const newUser = await createUser(req.body);
  res.send(newUser);
});

module.exports = router;
