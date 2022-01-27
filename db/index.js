const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: "./.env"});

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST, 
    user: process.env.USER, 
    password: process.env.PASSWORD, 
    database: process.env.DATABASE
})

db.getConnection((err) => {
    if(err){
        return console.error(err);
    } else {
        console.log("DB Connected...")
    }
})

module.exports = db;