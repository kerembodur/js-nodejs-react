const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var categoryModel = function (obj) {

    this.id = obj.id || "";
    this.category_name = obj.category_name || "";
    this.category_img = obj.category_img || "";

}


Router.put("/", (req, res) => {
    var obj = new categoryModel(req.body)
    connection.query(
        "UPDATE categories SET id=?,category_name=?,category_img=? WHERE id = ?", 
        [obj.id, obj.category_name, obj.category_img, obj.id], (errq, resq) => {
            if(errq) {
                console.log("categoryUpdate error: ", errq);
                res.sendStatus(500);
            }else{   
                console.log("categoryUpdate res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;