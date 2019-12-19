var mqtt = require("mqtt");
var options = {
    username : "fwojtpwi",
    password : "4O_Fclv3SAvX",
    clientId : generateClientId()
};
var client = mqtt.connect('tcp://tailor.cloudmqtt.com:18997', options);

client.on('connect',function () {
    client.subscribe('test',function (err) {
        if (err){
            console.log(`Error : ${err}`);
        }
    })
});

client.on('message',function (topic, message) {
    console.log(`Received : ${message} from ${topic}`);
});

function generateClientId(){
    var clientId = "client_";
    for(let i=0;i<5;i++){
        clientId = Math.floor(Math.random()*Math.floor(9));
    }
    return clientId;
}

module.exports = client;