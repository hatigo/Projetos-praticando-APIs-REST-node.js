const express = require('express');
const {findCompany} = require('./controlers.js/company');
const routers = express();


routers.get('/empresas/:domain',findCompany);




module.exports = routers;