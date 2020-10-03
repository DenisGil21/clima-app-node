const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4b2bd9243b3918e1dccf26cf22fa64b3&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}