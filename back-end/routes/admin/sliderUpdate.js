const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var sliderModel = function (obj) {

    this.id = obj.id || "";
    this.title = obj.title || "";
    this.description = obj.description || "";
    this.bg_color = obj.bg_color || "";
    this.img = obj.img || "";

}


Router.put("/", (req, res) => {
    var obj = new sliderModel(req.body)
    console.log("obj : ",obj);
    connection.query(
        "UPDATE slider_items SET id=?,title=?,description=?,bg_color=?,img=? WHERE id = ?", 
        [obj.id, obj.title, obj.description, obj.bg_color, obj.img, obj.id], (errq, resq) => {
            if(errq) {
                console.log("sliderUpdate error: ", errq);
                res.sendStatus(500);
            }else{   
                console.log("sliderUpdate res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;