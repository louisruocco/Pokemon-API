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
    res.render("add");
})

router.get("/pokedex/:name", (req, res) => {
    db.query("SELECT * FROM pokemon WHERE name = ?", [req.params.name], (err, pokemon) => {
        if(err){
            return console.error(err);
        } else {
            res.render("pokemon", {pokemon});
        }
    })
})

router.get("/pokedex/api/docs", (req, res) => {
    res.render("docs");
})

module.exports = router;