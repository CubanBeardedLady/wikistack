// Packages
const express = require("express");
const router = express.Router();
// const router = require('express').Router();
const { addPage } = require('../views');

// Routes
router.get("/", async (req, res, next) => {
  res.send("got to GET /wiki");
});

router.post("/", async (req, res, next) => {
  res.send("got to POST /wiki");
});

router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
