const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var chartModel = function (obj) {
    // this.id = obj.id || "";
    this.product_id = obj.product_id || "";
    this.count = obj.count || "";
    this.category_id = obj.category_id || "";
    this.email = obj.email || "";
    this.user_id = obj.user_id || "";
    // this.add_date = obj.add_date || "";
    // this.sale_date = obj.sale_date || "";
}

Router.post("/", (req, res) => {
    var payload = req.body;

    if (payload.type === 'add') {
        let obj = new chartModel(JSON.parse(payload.chart));
        connection.query(
            "INSERT INTO chart SET ?",
            [obj], (errq, resq) => {
                if (errq) {
                    console.log("chartAdd error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Ekleme işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartAdd res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete eklendi.',
                        id: resq.insertId
                    });
                }
            }
        );
    } else if (payload.type === 'update') {
        let obj = JSON.parse(payload.chart);
        connection.query(
            "UPDATE chart SET count=? WHERE id=?",
            [obj.count, obj.id], (errq, resq) => {
                if (errq) {
                    console.log("chartAdd error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Sepete Ekleme işlemi sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartAdd res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Sepete eklendi.'
                    });
                }
            }
        );
    } else if (payload.type === 'get') {
        connection.query(
            "SELECT * FROM chart WHERE email=? AND sale_date IS NULL",
            [payload.email], (errq, resq) => {
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
    } else if (payload.type === 'sell') {
        connection.query(
            "UPDATE chart SET sale_date=? WHERE id IN (?)",
            [new Date(), payload.list], (errq, resq) => {
                if (errq) {
                    console.log("chartsell error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Satış sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartsell res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Satış işlemi tamamlandı.'
                    });
                }
            }
        );
    } else if (payload.type === 'del') {
        connection.query(
            "DELETE FROM chart WHERE id = ?",
            [payload.id], (errq, resq) => {
                if (errq) {
                    console.log("chartdel error: ", errq);
                    res.send({
                        status: 500,
                        message: 'Silme sırasında hata oluştu!'
                    });
                } else {
                    console.log("chartdel res: ", resq);
                    res.send({
                        status: 200,
                        message: 'Silme işlemi tamamlandı.'
                    });
                }
            }
        );
        
    }


});

module.exports = Router;