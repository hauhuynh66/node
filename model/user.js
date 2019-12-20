var db = require("../config/database");
var sequelize = db.sequelize;
var model = db.model;
var Sequelize = db.Sequelize;
var bcrypt = require("bcryptjs");

function hash(password) {
    return bcrypt.hashSync(password,5);
}

class User extends model{}
User.init({
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    firstname : {
        type : Sequelize.STRING(30),
        allowNull : false
    },
    lastname : {
        type : Sequelize.STRING(30),
        allowNull : false
    },
    username : {
        type : Sequelize.STRING,
        unique : true,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false,
        set(val) {
            this.setDataValue("password", hash(val));
        }
    },
    role: {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : "USER",
        set(val) {
            this.setDataValue("role", toUpperCase(val));
        }
    }
},{sequelize, modelName: "user", timestamps: false});

module.exports = User;