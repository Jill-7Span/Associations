exports.addOrRemoveStation = async (req, toArray, beforeStation, station) => {
    if(req.path == "/updateRouter"){
        const indexOfStation = toArray.indexOf(beforeStation);
        toArray.splice(indexOfStation, 0, station);
        return this.stringConverter(toArray);
    }else if (req.path == "/deleteStation"){
        console.log("delete");
        const indexOfStation = toArray.indexOf(station);
        toArray.splice(indexOfStation, 1);
        return this.stringConverter(toArray);
    }
};
exports.stringConverter = (toArray) => {
    const convertString = JSON.stringify(toArray);
    const object = (convertString.replace(/[\[\]\"']/g, ''));
    return object;
};
