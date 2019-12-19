var config = require("../config/database");
var sequelize = config.sequelize;
var model = config.model;
var Sequelize = config.Sequelize;

class Variable extends model{}
Variable.init({
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    co2 : {
        type : Sequelize.FLOAT,
        allowNull : false,
        defaultValue : 0
    },
    time : {
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW
    }
},{sequelize, modelName : "variable", timestamps : false});
Variable.sync({force : true});

module.exports = Variable;