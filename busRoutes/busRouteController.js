const busService = require("./busRouteService");
const common = require("../common/index")

exports.busRoute = async (req, res) => {
    const data = req.body;
    const strings = JSON.stringify(data);
    const isExist = await busService.getStation({ where: { stationName: data.stationName } });
    if (isExist) {
        res.send("Already Exits")
    } else {
        const array = await busService.busRoute(JSON.parse(strings));
        const busRoute = array.stationName.split(",");
        res.send(busRoute);
    }

};

exports.getStation = async (req, res) => {
    const { id } = req.query;
    const array = await busService.getStation({ where: { id } });
    res.send(array)
};

exports.updateRouter = async (req, res) => {
    const { id, station, beforeStation } = req.body;
    const { stationCheck, toArray } = await this.getIndex(id, station);
    if (stationCheck == null) {
        const update = await common.addOrRemoveStation(req, toArray, beforeStation, station);
        const object = { stationName: update };
        console.log("update", object);
        const newRoute = await busService.updateRouter(id,object);
        res.send(newRoute)
    } else {
        console.log("found");
    }

};

exports.deleteStation = async (req, res) => {
    const { id, station, beforeStation } = req.body;
    const { stationCheck, toArray } = await this.getIndex(id, station);
    if (stationCheck) {
        const update = await common.addOrRemoveStation(req, toArray, beforeStation, station);
        const object = { stationName: update };
        console.log("delete", object);
        const newRoute = await busService.updateRouter(id,object);
        res.send(newRoute)
    } else {
        console.log("Not found");
    }
}




exports.getIndex = async (id, station) => {
    const route = await busService.getStation(id);
    const toString = route.dataValues.stationName;
    const toArray = toString.split(",");
    const stationCheck = await common.stationCheck(toArray, station);
    return { stationCheck, toArray }
}