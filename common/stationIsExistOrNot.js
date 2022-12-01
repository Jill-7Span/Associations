exports.stationCheck = async (array,newStation) => {
    const data = array.find(element => element == newStation);
    if(!data){
        return null;
    }else{
        return data;
    }
};