const fs = require('fs');
const express = require('express');
const { default: axios } = require('axios');
const app = express();
app.use(express.json());


app.get('/enderecos/:cep', (req, res) => {
    const cep = req.params.cep
    const cepPromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    cepPromise.then(response => {



        fs.readFile('enderecos.json', 'utf8', (err, data) => {
            if (err) {
                console.log('erro:', err);

            } else {
                let enderecos = {
                    enderecos: []
                }

                enderecos = JSON.parse(data);

                const jaTem = enderecos.enderecos.find(x => x.cep === cep);
                if (jaTem) {
                    res.json(jaTem);
                    return;
                }

                enderecos.enderecos.push(response.data);

                fs.writeFile('enderecos.json', JSON.stringify(enderecos), err => {
                    if (err) {
                        console.log(err);
                    }
                })

                res.json(response.data);

            }


        })


    })


})





app.listen(8000);