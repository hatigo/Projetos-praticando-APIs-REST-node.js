const express = require('express');
const roteador = express();
const {get, getPorId, post, apagar} = require('./controladores/alunos');

roteador.get('/alunos', get);
roteador.get('/alunos/:id', getPorId);
roteador.post('/alunos', post);
roteador.delete('/alunos/:id', apagar);


module.exports = roteador;