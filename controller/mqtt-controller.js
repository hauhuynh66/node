var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json({contentType : "application/json"});
var mqtt = require("../service/mqtt-service");

router.post("/publish", jsonParser, function (req, res) {
    mqtt.publish(req.body.topic, req.body.message,function (err) {
        if(!err){
            res.status(200).send("OK");
        }else{
            res.status(500).send("Server Error");
        }
    });
});

module.exports = router;