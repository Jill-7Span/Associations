const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const buses= sequelize.define('buses', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
         },
        busNumber: {
            type: DataTypes.INTEGER(10),
        },
        busName:{
            type: DataTypes.STRING(20),
        },
    }, {
        underscored: true,
    })
    return buses;
};