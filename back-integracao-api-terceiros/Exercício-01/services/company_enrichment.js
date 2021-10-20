const axios = require('axios');

const instance = axios.create({
    baseURL : 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '563c4f880bd9493fb30058f6e45735b9',
        
    }
})

module.exports = instance;

