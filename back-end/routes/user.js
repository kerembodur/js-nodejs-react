const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.get("/", (req, res)=>{
    connection.query(
        "SELECT * from users", (err,rows, fields) => {
            if(!err){
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;