var Gpio = require("onoff").Gpio;

function turnOn(pin){
    var led = new Gpio(pin,'out');
    led.writeSync(1);
}

function turnOff(pin){
    var led = new Gpio(pin,'out');
    led.writeSync(0);
}

module.exports = {
    turnOn : turnOn,
    turnOff : turnOff,
}