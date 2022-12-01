const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const passengers = sequelize.define('passengers', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        boarding: {
            type: DataTypes.STRING(20),
        },
        destination:{
            type: DataTypes.STRING(20),
        },
        total:{
            type: DataTypes.INTEGER(10),
        }
    }, {
        underscored: true,
    })
    return passengers;
};