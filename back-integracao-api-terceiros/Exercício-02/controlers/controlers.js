const instance = require('../services/axios_config');
const fs = require('fs');

const votacao = async (req, res) => {
    try {
        const { pais, ip } = req.params;
        const ipData = await instance.get(`?ip_address=${ip}`);
        if (!ipData.data.country === pais) {
            res.status(400).json({
                erro: "ip informado não corresponde ao páis da votação"
            })
        }

        fs.readFile('votos.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let votos = {
                    votos: []
                };

                votos = JSON.parse(data);
                votos.votos.push({
                    ip: ip,
                    voto: req.body.voto
                })

                fs.writeFile('votos.json', JSON.stringify(votos), err => {
                    if (err) {
                        console.log(err);
                    }
                })



            }
        })
        res.send('Tudo certo');
    }
    catch (error) {
        res.status(400).json({
            erro: 'O ip informado é inválido'
        });
    }



}

const verVotos = async (req, res) => {
    
    fs.readFile('votos.json', 'utf8', (err, data) => {
        if (err){
            console.log(err);
        }else {
            res.json(JSON.parse(data));
        }
    })
      

}


module.exports = { votacao, verVotos };