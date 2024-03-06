const express = require('express');
const Router = express.Router();
// const connection = require('../connection');


Router.get("/", (req, res)=>{
    console.log("req.session : ", req.session);
    
     

});

module.exports = Router;