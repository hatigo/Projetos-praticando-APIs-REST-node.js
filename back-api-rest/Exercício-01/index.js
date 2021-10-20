const express = require('express');
const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get('/convidados', (req, res) => {
    const nome = req.query.nome;

    if(nome === undefined){
        res.json(convidados);
    }else{
       const convidado = convidados.find( x => x === nome);
       if(convidado === undefined){
           res.json({
               mensagem: "O convidado buscado não está presente na lista."
            });
       }else{
            res.json({
                mensagem: "Convidado presente."
            });
       }
    }
})

app.post('/convidados', (req, res) => {
    const nome = req.body.nome;
    const convidado = convidados.find( x => x === nome);

    if(convidado !== undefined){
        res.json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        })
    }else{
        convidados.push(nome);
        res.json({
            mensagem: "Convidado adicionado."
        })
    }
})

app.delete('/convidados/:nome', (req,res) => {
    const nome = req.params.nome;
    const convidado = convidados.find( x => x === nome);
    

    if(convidado === undefined){
        res.json({
            mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
        })
    }else {
        const indice = convidados.indexOf(convidado);
        convidados.splice(indice, 1);
        res.json({
            mensagem: "Convidado removido."
        })

    }
})

app.listen(8000);