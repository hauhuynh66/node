var express = require("express");
var router = express.Router();
var sensor = require("../model/sensor");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json({contentType: "application/json"});

router.get("/add", jsonParser,function (req, res) {
    sensor.create({temp: req.query.t,humid: req.query.h}).then(data=>{
        console.log(`Insert record id ${data.id} into table`);
        res.status(200).send("OK");
    });
});

router.get("/list", function (req,res) {
    sensor.findAll().then(list=>{
        res.status(200).send(JSON.stringify(list));
    });
});

module.exports = router;