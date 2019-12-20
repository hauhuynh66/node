var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlParser = bodyParser.urlencoded({extended: false});
var user = require("../model/user");
var bcrypt = require("bcryptjs");
var value = require("../config/value");
var jwt = require("jsonwebtoken");

function filter(req, res, next) {
    if(req.session.token===null){
        res.redirect("/login");
    }else{
        jwt.verify(req.session.token, value.secret, function (err) {
            if(err){
                res.redirect("/login");
            }else{
                next();
            }
        });
    }
}

function validate(values){
    var message = "OK";
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(values.firstname.length<2&&values.firstname.length>100){
        message = "Firstname must have 2-100 characters";
    }else if(values.lastname.length<2&&values.lastname.length>100){
        message = "Lastname must have 2-100 characters";
    }else if(values.username.length<5&&values.username.length>200){
        message = "Username must have 5-200 characters"
    }else if(regex.test(values.email)===false){
        message = "Email is not valid";
    }else if(values.password.length<5){
        message = "Password must have more than 5 characters";
    }
    return message;
}


router.post("/register", urlParser, function (req,res) {
    var message = validate(req.body);
    if(message.toUpperCase()==="OK"){
        user.create(req.body).then(()=>{
            res.redirect("/login?success");
        });
    }
});

router.post("/authenticate", urlParser, function (req, res) {
    user.findOne({
        where : {
            email : req.body.email
        }
    }).then(data=>{
        if(data===null){
            res.redirect("/login?notfound");
        }else{
            var t = bcrypt.compareSync(req.body.password,data.password);
            if(t){
                req.session.token = jwt.sign({username : data.username}, value.secret);
                res.redirect("/user/my/dashboard");
            }else{
                res.redirect("/login?badcredential");
            }
        }
    });
});

router.get("/my/dashboard", function (req, res) {
    jwt.verify(req.session.token, value.secret, function (err, decoded) {
        if(err){
            res.status(200).send(err.message);
        }else{
            res.status(200).send(decoded.username);
        }
    });
});



module.exports = {
    router : router,
    filter : filter,
};