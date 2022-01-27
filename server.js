const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
const ejs = require("ejs");
const flash = require("connect-flash");
const app = express();

dotenv.config({path: "./.env"});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening at " + port));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use(flash());