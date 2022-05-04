const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RANDOMTHING extends Model {}

RANDOMTHING.init ( 
    {

    },
    {

    }
);

module.exports = RANDOMTHING;