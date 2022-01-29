const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/pokemon", (req, res) => {
    res.render("home");
})

module.exports = router;