const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const busStations = sequelize.define('bus_stations', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        stationName: {
            type: DataTypes.TEXT('long'),
        },
    }, {
        underscored: true,
    })
    return busStations;
};