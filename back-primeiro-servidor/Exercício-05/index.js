const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let index = 0
app.get("/", (req, res) => {

    jogadores[index] === undefined ? index = 0 : index = index; 
    const nomeDoJogador = jogadores[index];
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
    index++;
})

app.get("/remover", (req, res) => {
    const indiceDojogadorRemovido = req.query.indice;

    if(indiceDojogadorRemovido === undefined){  
        res.send('Você precisa colocar um índice');
    }else if(jogadores[indiceDojogadorRemovido] === undefined){
        res.send(`Não existe jogador no indice informado (${Number(indiceDojogadorRemovido)}) para ser removido`);
    }else {
        jogadores.splice(indiceDojogadorRemovido,1);
        res.send(jogadores);
    }
    
})

app.get("/adicionar", (req, res) => {
    const jogadorAdicionado = req.query.nome;
    const indiceDoJogadorAdicionado = req.query.indice;

    if(indiceDoJogadorAdicionado === undefined){
        jogadorAdicionado[0] = jogadorAdicionado[0].toUpperCase();
        jogadores.push(jogadorAdicionado);
        res.send(jogadores);
    }else if (jogadores[Number(indiceDoJogadorAdicionado)] === undefined) {
        res.send(`O indice informado (${indiceDoJogadorAdicionado}) não existe no array. Novo jogador não adicionado`);
    }else {
        jogadores.splice(Number(indiceDoJogadorAdicionado),0,jogadorAdicionado);
        res.send(jogadores); 
    }
})

app.listen(8000);