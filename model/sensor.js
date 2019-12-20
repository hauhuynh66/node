var db = require("../config/database");
var sequelize = db.sequelize;
var model = db.model;
var Sequelize = db.Sequelize;

class Sensor extends model{}
Sensor.init({
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    temp : {
        type : Sequelize.FLOAT,
        allowNull : false,
        defaultValue : 0
    },
    humid : {
        type : Sequelize.FLOAT,
        allowNull : false,
        defaultValue : 0
    },
    soil_moisture : {
        type : Sequelize.FLOAT,
        allowNull : false,
        defaultValue : 0
    },
    time:{
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW
    }
},{sequelize, modelName : 'sensor', timestamps : false});

Sensor.sync({force : true});
module.exports = Sensor;