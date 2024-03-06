const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.get("/", (req, res)=>{
    // console.log("req : ", req.query);
    connection.query(
        "SELECT * FROM slider_items", (err,rows, fields) => {
            if(!err){
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;