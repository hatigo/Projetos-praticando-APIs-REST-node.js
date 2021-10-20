const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://ipgeolocation.abstractapi.com/v1/',
    params: {
        api_key: '58cafbe4558f425d8e8c731e3b26fbe0'
    }
})

module.exports = instance;