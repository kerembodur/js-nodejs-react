const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.get("/", (req, res)=>{
    console.log("req : ", req.query);
    limit = req.query.product_count ? ' LIMIT '+ req.query.product_count : '';
    connection.query(
        "SELECT * FROM products ORDER BY product_add_date DESC" + limit, (err,rows, fields) => {
            if(!err){
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;