const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT name FROM pokemon", (err, pokemon) => {
        if(err){
            return console.error(err);
        } else {
            res.render("home", {pokemon});
        }
    })
})

router.get("/pokemon", (req, res) => {
    db.query("SELECT * FROM pokemon", (err, pokemon) => {
        if(err){
            return console.error(err);
        } else {
            res.json(pokemon);
        }
    })
})

router.get("/add", (req, res) => {
    res.render("add")
})

module.exports = router;