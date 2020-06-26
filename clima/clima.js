const axios = require('axios');

const getClima = async(lat, lng) => {

    lat = encodeURI(lat);
    lng = encodeURI(lng);
    let clima = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ad6f490b5eb6a3a05fb5f65488b9d137`);

    if (clima.data.cod === '400') {
        throw new Error('No hay resultados para la ciudad ');
    }

    return clima.data.main.temp;
}

module.exports = {
    getClima
}