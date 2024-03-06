const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.get("/", (req, res)=>{
    console.log("req : ", req.query);
    var query;
    if(req.query.id){
        query = "SELECT * FROM products WHERE id=" + req.query.id;
    } else {
        query = "SELECT * FROM products";

    }
     
    connection.query(
        query, (err,rows, fields) => {
            if(!err){
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;