const axios = require('axios');



//pra usar el await se debe poner async


const getLugarLatLon = async(dir) => {

    const encodedUlr = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '2e15eb7130mshd8f2c0488a8bddfp13904fjsn2e97ee9cb0e9' }



    });

    const resp = await instance.get(); //este es una promesa

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direccion,
        lat,
        lon
    }


}

module.exports = {
    getLugarLatLon

}