const e = require("connect-flash");
const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/add", (req, res) => {
    const { name, type, area } = req.body;
    db.query("SELECT name FROM pokemon WHERE name = ?", [name], (err, pokemon) => {
        if(err){
            return console.error(err);
        }

        if(pokemon.length > 0){
            return res.send("<h1>Pokemon Already in Pokedex!</h1>")
        }

        db.query("INSERT INTO pokemon SET ?", {name: name, type: type, area: area}, (err) => {
            if(err){
                return console.error(err);
            } else {
                res.send("<h1>Pokemon Sucessfully Added</h1>")
            }
        })
    })
})

module.exports = router;