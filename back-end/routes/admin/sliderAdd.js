const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var sliderModel = function (obj) {

    // this.id = obj.id || "";
    this.title = obj.title || "";
    this.description = obj.description || "";
    this.bg_color = obj.bg_color || "";
    this.img = obj.img || "";

}


Router.post("/", (req, res) => {
    var obj = new sliderModel(req.body)
    connection.query(
        "INSERT INTO slider_items SET ?",
        [obj], (errq, resq) => {
            if (errq) {
                console.log("sliderAdd error: ", errq);
                res.sendStatus(500);

            } else {
                console.log("sliderAdd res: ", resq);
                res.sendStatus(200);

            }
        }
    );
});

module.exports = Router;