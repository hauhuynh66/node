var express = require("express");
var router = express.Router();
var led = require("../service/led");
var serial = require("../service/myserial");

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

router.get("/turn/:pin/:state", function (req,res) {
    var param = req.params;
    if(param.state == "on"){
        led.turnOn(param.pin);
    }else if(param.state == "off"){
        led.turnOff(param.pin);
    }
    res.status(200).send("OK");
});

router.get("/serial/:str", function(req, res) {
    var str = req.params.str;
    serial.write(str, function(err){
        if(err){
            console.log(`Error : ${err.message}`);
        }
        console.log(`Send : ${str}`);
    });
    res.status(200).send("OK");
});

module.exports = router;
