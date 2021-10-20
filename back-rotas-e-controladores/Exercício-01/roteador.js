const express = require('express');
const roteador = express();
const { get, getPorId } = require('./controladores/imoveis');

roteador.get('/imoveis', get);
roteador.get('/imoveis/:idConsultado', getPorId);

module.exports = roteador;