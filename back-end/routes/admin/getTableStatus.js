const express = require('express');
const Router = express.Router();
const connection = require('../../connection');



Router.post("/", (req, res) => {
    console.log("zxczxcxzdenem : ", req.body.table_name);
    // res.send("asdasdasdasd");
    connection.query(
        "SHOW TABLE STATUS LIKE ?",
        [req.body.table_name], (errq, resq) => {
            if (errq) {
                console.log("getTableStatus error: ", errq);
                res.sendStatus(500);

            } else {
                console.log("getTableStatus resq: ", resq[0].Auto_increment);
                res.send({
                    id: resq[0].Auto_increment,
                    status: true
                });

            }
        }
    );
});

module.exports = Router;