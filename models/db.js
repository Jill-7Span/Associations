const env = require("../.env")

//      sequelize import
const { Sequelize, DataTypes } = require('sequelize');

//      passing database = = db name , username , password , host  , dialect
const sequelize = new Sequelize(DB_NAME, ROOT, PASSWORD, {
    host: HOST_NAME,
    dialect: DIALECT,
    logging: false      // to log off in console
});

//      sequelize defining  
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//      connecting db to model
db.buses = require("./busModel")(sequelize, DataTypes);
db.busStations = require("./busStationsModel")(sequelize, DataTypes);
db.passengers = require("./passengerModel")(sequelize, DataTypes);


//      sync db
// db.sequelize.sync({force:true})
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("##     R E _ S Y N C      ##");
    })
    .catch((error) => {
        console.log("##     E R R O R        " + error);
    });


//      export db
module.exports = db;