var value = require("./config/value");
var config = require("./config/config");
var express = require("express");
var mainController = require("./controller/main-controller");
var sensorController = require("./controller/sensor-controller");
var messageController = require("./controller/message-controller");
var userController = require("./controller/user-controller");
var variableController = require("./controller/variable-controller");
var mqttController = require("./controller/mqtt-controller");
var path = require("path");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

io.on('connection', function(socket){
    console.log('New user connected');
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
    socket.on('message', function (message) {
        console.log(`Message : ${message}`);
        io.emit("message",message);
    });
});

app.use(config.session);
app.set("views", path.join(__dirname,"view"));
app.set("view engine","ejs");
app.all("**/user/my/**", userController.filter);
app.use("/static",express.static("static"));
app.use("/",mainController);
app.use("/user",userController.router);
app.use("/sensor",sensorController);
app.use("/message",messageController);
app.use("/mqtt",mqttController);
app.use("/variable",variableController);
server.listen(value.port, function () {
    console.log(`Server running on port ${value.port}`);
});