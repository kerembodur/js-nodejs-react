const express = require('express');
const Router = express.Router();
const connection = require('../../connection');


Router.post("/", (req, res) => {
    var payload = req.body;

    if (payload.type === 'getAllSold') {
        connection.query(
            // "SELECT * FROM chart WHERE sale_date IS NOT NULL",
            // BETWEEN UNIX_TIMESTAMP('2021-03-07') AND UNIX_TIMESTAMP('2021-05-07')
            `SELECT s1.*, s2.category_name 
            FROM chart s1, categories s2 
            WHERE s1.sale_date IS NOT NULL
            AND s1.category_id = s2.id 
            ORDER BY s1.sale_date`,
            (errq, resq) => {
                if (errq) {
                    console.log("chartGet error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Get işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartGet res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete Bilgileri Geldi.',
                        chart: resq
                    });
                }
            }
        );
    } else if(payload.type === 'getByDateRange'){
        connection.query(
            `SELECT s1.*, s2.category_name 
            FROM chart s1, categories s2 
            WHERE s1.sale_date >= ? AND s1.sale_date <= ?
            AND s1.category_id = s2.id 
            ORDER BY s1.sale_date`,
            [payload.startDate, payload.endDate], (errq, resq) => {
                if (errq) {
                    console.log("chartGet error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Get işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartGet res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete Bilgileri Geldi.',
                        chart: resq
                    });
                }
            }
        );
    } else if (payload.type === 'getAllSoldProduct') {
        connection.query(
            // "SELECT * FROM chart WHERE sale_date IS NOT NULL",
            // BETWEEN UNIX_TIMESTAMP('2021-03-07') AND UNIX_TIMESTAMP('2021-05-07')
            `SELECT s1.*, s2.product_name, s2.product_price
            FROM chart s1, products s2 
            WHERE s1.sale_date IS NOT NULL
            AND s1.product_id = s2.id 
            ORDER BY s1.sale_date`,
            (errq, resq) => {
                if (errq) {
                    console.log("chartGet error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Get işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartGet res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete Bilgileri Geldi.',
                        chart: resq
                    });
                }
            }
        );
    }else if(payload.type === 'getAllSoldProductByDateRange'){
        connection.query(
            `SELECT s1.*, s2.product_name, s2.product_price
            FROM chart s1, products s2 
            WHERE s1.sale_date >= ? AND s1.sale_date <= ?
            AND s1.product_id = s2.id 
            ORDER BY s1.sale_date`,
            [payload.startDate, payload.endDate], (errq, resq) => {
                if (errq) {
                    console.log("chartGet error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Get işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartGet res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete Bilgileri Geldi.',
                        chart: resq
                    });
                }
            }
        );
    }
});

module.exports = Router;