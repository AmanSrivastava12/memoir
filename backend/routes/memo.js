const express = require("express");
const router = express.Router();
const Memo = require("../models/memoModel");

router.get("/view", async (req, res) => {
  try {
    const allMemos = await Memo.find();
    res.json({ success: true, value: allMemos });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/viewOne/:id", async (req, res) => {
  try {
    const singleMemo = await Memo.findById(req.params.id);
    res.json({ success: true, value: singleMemo });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/add", async (req, res) => {
  try {
    const { title, context, ttr, category } = req.body;
    const newMemo = new Memo({
      title,
      context,
      ttr,
      category,
    });
    await newMemo.save();
    res.json({
      success: true,
      value: newMemo,
    });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let memo = await Memo.findById(req.params.id);
    if (!memo)
      return res.status(404).send({ success: false, error: "Not found" });
    await Memo.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { title, context, ttr, category } = req.body;
    const newMemo = {};
    newMemo.title = title;
    newMemo.context = context;
    newMemo.ttr = ttr;
    newMemo.category = category;
    let memo = await Memo.findById(req.params.id);
    if (!memo) {
      return res.status(404).send({ success: false, error: "Not found" });
    }
    await Memo.findByIdAndUpdate(
      req.params.id,
      { $set: newMemo },
      { new: true }
    );
    res.json({
      success: true,
      value: newMemo,
    });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
});

router.post("/search", async (req, res) => {
  try {
    const { searchQuery } = req.body;
    let results = await Memo.find(
      { $text: { $search: searchQuery } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
    res.json({
      success: true,
      value: results,
    });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
});

module.exports = router;
