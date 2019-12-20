var myserial = require("serialport");
var port = new myserial("/dev/ttyAMA0", {baudRate: 115200});

port.on('error', function(err) {
  console.log(`Error: ${err.message}`);
});

module.exports = port;