var db = require("../config/database");
var sequelize = db.sequelize;
var model = db.model;
var Sequelize = db.Sequelize;

class Message extends model{}
Message.init({
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    message : {
        type : Sequelize.TEXT,
        allowNull : false,
        defaultValue : ""
    }
},{sequelize, modelName: "message", timestamps: false});

Message.sync({force : true});
module.exports = Message;