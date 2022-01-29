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
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
