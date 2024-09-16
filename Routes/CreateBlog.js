const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/createBlog", async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      date: req.body.date,
      author: req.body.author,
      description: req.body.description, 
      img: req.body.img
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = router;
