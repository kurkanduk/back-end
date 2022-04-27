var express = require('express');
var router = express.Router();
var func = require("../controllers/controllers.js");
router.get("/users", func.getAll);
router.get("/users/:id", func.getOne);
router.post("/users", func.createOne);
router.put("/users/:id", func.updateOne);
router.delete("/users/:id", func.deleteOne);
module.exports = router;
