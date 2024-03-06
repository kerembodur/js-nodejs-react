const express = require('express');
const Router = express.Router();
const connection = require('../../connection');


Router.post("/", (req, res, next) => {
    try {
        console.log("********** req :", req.query.dirPath);
        // console.log("**********  res:", res);
        let img = req.files.img;
        img.mv('./img/' + req.query.dirPath + '/' + img.name);


        res.send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: img.name,
                mimetype: img.mimetype,
                size: img.size
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = Router;