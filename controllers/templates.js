const router = require("express").Router();
const { Template } = require("../models/Template");
require("dotenv").config();


router.get("/", async (req, res) => {
  const templates = await Template.find({})
  res.json(templates)
})

router.post("/", async (req, res) => {
  const template = await Template.create(req.body)
  res.json(template)
})


module.exports = router;