const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encondedUrl = encodeURI(direccion);
    // Make a request for a user with a given ID
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyDBQIIfMxcdpTMwD9b8m_gwlSp3ykDsSpA`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad ' + direccion)
    }

    //console.log(JSON.stringify(response.data, undefined, 2));
    let location = respuesta.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
};
module.exports = {
    getLugarLatLng
}