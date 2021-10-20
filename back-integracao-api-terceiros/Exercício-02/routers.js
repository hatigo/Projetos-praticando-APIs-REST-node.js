const express = require('express');
const {votacao, verVotos} = require('./controlers/controlers');
const routers = express();

routers.post('/votacao/:pais/:ip',votacao);
routers.get('/votacao', verVotos);

module.exports = routers;