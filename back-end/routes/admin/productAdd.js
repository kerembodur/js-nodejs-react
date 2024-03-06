const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var productsModel = function (obj) {

    // this.id = obj.id || "";
    this.product_name = obj.product_name || "";
    this.product_category = obj.product_category || "";
    this.product_stock_count = obj.product_stock_count || "";
    this.product_description = obj.product_description || "";
    this.product_price = obj.product_price || "";
    // this.product_add_date = obj.product_add_date || "";
    this.product_img = obj.product_img || "";

}


Router.post("/", (req, res) => {
    var obj = new productsModel(req.body)
    connection.query(
        "INSERT INTO products SET ?", 
        [obj], (errq, resq) => {
            if(errq) {
                console.log("productAdd error: ", errq);
                res.sendStatus(500);
            }else{   
                console.log("productAdd res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;