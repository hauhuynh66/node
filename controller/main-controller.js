var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index",{title : "Index"});
});

router.get("/register",function (req, res) {
    res.render("register",{title : "Register"});
})

router.get("/sensor", function (req, res) {
    res.render("sensor",{title : "Sensor"});
});

router.get("/message", function (req, res) {
    res.render("message",{title : "Message"});
});

router.get("/mqtt", function (req, res) {
    res.render("mqtt",{title : "MQTT"});
});

router.get("/login", function (req, res) {
    res.render("login",{title : "Login"});
});

module.exports = router;
