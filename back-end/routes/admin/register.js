const express = require('express');
const Router = express.Router();
const connection = require('../../connection');

var userModel = function (obj) {

    // this.user_id = obj.user_id || "",
    this.user_name = obj.user_name || "";
    this.user_surname = obj.user_surname || "";
    this.password = obj.password || "";
    this.email = obj.email || "";
    this.phone_number = obj.phone_number || "";
    this.user_role = obj.user_role || 2;
    this.user_adress = obj.user_adress || "";
    // this.registration_date = obj.registration_date || "";
    // this.last_login = obj.last_login || ""
}



Router.post("/", (req, res) => {
    var obj = new userModel(JSON.parse(req.body.user)) 
    connection.query(
        "INSERT INTO users SET ?", 
        [obj], (errq, resq) => {
            if(errq) {
                console.log("userAdd error: ", errq);
                res.send({
                    status: 500,
                    message: 'Kayıt işlemi sırasında hata oluştu!'
                });
            }else{   
                console.log("userAdd res: ", resq);
                res.send({
                    status: 200,
                    message: 'Kayıt Başarılı, giriş sayfasına yönlendiriliyorsunuz.'
                });
            }
        }
    );
});

module.exports = Router;