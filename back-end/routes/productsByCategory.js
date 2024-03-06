const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.get("/", (req, res)=>{
    console.log("req : ", req.query);
    category = req.query.category_id || 1;
    connection.query(
        "SELECT * FROM products WHERE product_category=" + category, (err,rows, fields) => {
            if(!err){
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;