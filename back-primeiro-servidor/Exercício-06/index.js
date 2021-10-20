const express = require('express');
const app = express();



let intervalId;
let segundos = 0;
let minutos = 0;

function cronometro(){
    intervalId = setInterval(() => {
        if(segundos === 59){
            segundos = 0;
            minutos++;
        }else {
            segundos++;
        }
    }, 1000);
    
} 




app.get("/", (req, res) => {
    let pluralMin = "";
    let pluralSec = "";
    minutos > 1 ? pluralMin = "minutos" : pluralMin = "minuto";
    segundos > 1 ? pluralSec = "segundos" : pluralSec = "segundo";

    const minuto = String(minutos).padStart(2, "0");
    const segundo = String(segundos).padStart(2, "0");

    res.send(`Tempo atual do cronômetro: ${minuto} ${pluralMin} e ${segundo} ${pluralSec}`)
})

app.get("/iniciar", (req, res) => {
    cronometro();
    res.send("Cronômetro iniciado!");
})

app.get("/pausar", (req, res) => {
    clearInterval(intervalId);
    res.send("Cronômetro pausado!");
})

app.get("/continuar", (req, res) => {
    cronometro();
    res.send("Cronômetro continuando!");
})

app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send("Cronômetro zerado!");
})

app.listen(8000);