const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/pokemon", (req, res) => {
    res.send("pokemon JSON")
})

router.get("/add", (req, res) => {
    res.render("add")
})

module.exports = router;