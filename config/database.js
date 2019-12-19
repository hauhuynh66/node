var Sequelize = require('sequelize');
var model = require('sequelize').Model;
var sequelize = new Sequelize('idb','phuochau','Hauhuynh',{
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        connectionTimeout : 2000
    },
    timezone: 'Etc/GMT-7'
});

module.exports = {
    Sequelize : Sequelize,
    model : model,
    sequelize : sequelize
};