const express = require('express');
const Router = express.Router();
const connection = require('../connection');


Router.post("/", (req, res) => {
    var payload = req.body;

    query = "SELECT * FROM products WHERE id IN (?)";


    connection.query(
        query,[req.body], (err, rows, fields) => {
            if (!err) {
                res.send(rows);

            } else {
                console.log(err);
            }
        }
    );
});

module.exports = Router;