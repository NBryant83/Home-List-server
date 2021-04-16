const router = require("express").Router();
const { User } = require("../models/User");
const { Template } = require("../models/Template");
const { List } = require("../models/List");
const { Item } = require("../models/Item");
require("dotenv").config();

// GET all from /lists
router.get("/", async (req, res) => {
  const lists = await List.find({})
  console.log(lists)
  res.json(lists)
} )

// POST to "/lists"
router.post("/", async (req, res) => {
  const list = await List.create(req.body)
  res.json(list)
})




module.exports = router;