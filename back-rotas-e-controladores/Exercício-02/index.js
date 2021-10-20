const express = require('express');
const roteador = require('./roteador');
const intermediario = require('./intermediario');
const app = express();

app.use(express.json());
app.use(intermediario);
app.use(roteador);

app.listen(8000);