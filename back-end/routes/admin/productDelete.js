const express = require('express');
const Router = express.Router();
const connection = require('../../connection');


Router.delete("/", (req, res) => {
    connection.query(
        "DELETE FROM products WHERE id = ?", 
        [req.query.id], (errq, resq) => {
            if(errq) {
                console.log("productDelete error: ", errq);
                res.sendStatus(500);

            }else{   
                console.log("productDelete res: ", resq);
                res.sendStatus(200);
            }
        }
    );
});

module.exports = Router;