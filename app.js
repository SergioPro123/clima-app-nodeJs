const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./yargs/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');



let getInfoClima = async(direccion) => {

    try {
        let coors = await getLugarLatLng(direccion);
        let temp = await getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp} °C`;

    } catch (error) {
        return `No se pudo determinar el clima en '${direccion}'`;
    }

}


getInfoClima(argv.direccion)
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })