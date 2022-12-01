const model = require("../models/db");

exports.busRoute = async (data) => {
   const a = await model.busStations.create(data)
   return a.dataValues 
}

exports.getStation = async (condition) => {
    const data = await model.busStations.findOne(condition)
    return data;
};

exports.updateRouter = async (id , update) => {
    console.log(id,update);
    const data = await model.busStations.update(update,{where:{id}})
    return data;
}

