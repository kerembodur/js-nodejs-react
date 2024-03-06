const express = require('express');
const Router = express.Router();
const connection = require('../../connection');


Router.delete("/", (req, res) => {
    connection.query(
        "DELETE FROM slider_items WHERE id = ?", 
        [req.query.id], (errq, resq) => {
            if(errq) {
                console.log("sliderDelete error: ", errq);
                res.sendStatus(500);
            }else{   
                console.log("sliderDelete res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;