const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0
app.get("/controladorderodadas", (req, res) => {

    jogadores[indice] === undefined ? indice = 0 : indice = indice; 
    const nomeDoJogador = jogadores[indice];
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
    indice++;
})

app.listen(8000);



