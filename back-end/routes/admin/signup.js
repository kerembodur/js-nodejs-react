const express = require('express');
const session = require('express-session');

const Router = express.Router();
const connection = require('../../connection');

// const { signupValidation, loginValidation } = require('../admin/Validation');

Router.post("/", (req, res) => {
    var user = JSON.parse(req.body.user);
    console.log("req.body : ", user);

    connection.query(
        "SELECT * FROM users WHERE email= ?", [user.email],
        // "SELECT * FROM users WHERE email= ? LEFT JOIN chart WHERE email=?", [user.email, user.email],
        // "SELECT * FROM users, chart WHERE email= ? AND email=?", [user.email, user.email],
        (errq, rows) => {

            if (errq) {
                console.log("signup error: ", errq);
            } else {
                console.log("signup rows : ", rows);

                if (rows.length > 0 && user.password == rows[0].password) {
                    // res.sendStatus(200);
                    // res.redirect('../');
                    // req.session.loggedin = true;
                    // req.session.username = user.email;
                    // console.log("req.session.username : ", req.session.username);
                    var userData = rows[0];
                    console.log("userData: ", userData);
                    // 
                    connection.query(
                        "SELECT * FROM chart WHERE email= ? AND sale_date IS NULL", [user.email],
                        (errqChart, rowsChart) => {

                            if (errqChart) {
                                console.log("chart error: ", errqChart);
                            } else {
                                console.log("chart rows : ", rowsChart);
                                userData.chart = rowsChart;
                                // res.end();
                                res.send({
                                    status: 200,
                                    user: userData
                                });
                            }
                        }
                    );
                    
                } else {
                    res.send({
                        status: 400,
                        message: 'Kullanıcı adı ya da şifre yanlış'
                    });
                }
                // res.end();
            }
        }
    );
});

module.exports = Router;