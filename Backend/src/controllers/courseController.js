const express = require("express");

const Course = require("../models/courseModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  return res.status(201).send(course);
});

module.exports = router;
