const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var categoryModel = function (obj) {

    // this.id = obj.id || "";
    this.category_name = obj.category_name || "";
    this.category_img = obj.category_img || "";

}



Router.post("/", (req, res) => {
    var obj = new categoryModel(req.body)
    connection.query(
        "INSERT INTO categories SET ?", 
        [obj], (errq, resq) => {
            if(errq) {
                console.log("categoryAdd error: ", errq);
                res.sendStatus(500);
            }else{   
                console.log("categoryAdd res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;