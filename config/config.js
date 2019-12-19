var session = require("express-session");
var value = require("./value");

session = session({secret : value.secret, resave : false, saveUninitialized : false});

module.exports = {
    session : session,
};