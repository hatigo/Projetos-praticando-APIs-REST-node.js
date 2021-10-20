const express = require('express');
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let proximoId = 3;

app.get('/livros', (req, res) => {
    res.json(livros);
})

app.get('/livros/:idConsultado', (req, res) => {
    const id = req.params.idConsultado;
    const livro = livros.find(x => x.id === Number(id));
    
    if(livro){
        res.json(livro);
    }else{
        res.json({
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
          })
    }
})

app.post('/livros', (req, res) => {
    const livro = req.body;

    const novoLivro = {
        id: proximoId,
        titulo: livro.titulo,
        autor: livro.autor,
        ano: livro.ano,
        numPaginas: livro.numPaginas

    };

    livros.push(novoLivro);
    res.json(novoLivro);
    proximoId++;
})

app.put('/livros/:idConsultado', (req, res) => {
    const id = req.params.idConsultado;
    const livro = livros.find(x => x.id === Number(id));
    
    if(livro){
        const indice = livros.indexOf(livro);

        const novoLivro = {
            id: id,
            titulo: req.body.titulo,
            autor: req.body.autor,
            ano: req.body.ano,
            numPaginas: req.body.numPaginas
    
        };
    
        livros.splice(indice, 1, novoLivro);
        res.json(novoLivro);
    }else {
        res.json({
            mensagem: "Não existe livro a ser substituído para o ID informado."
          })
    }
   
})

app.patch('/livros/:idConsultado', (req, res) => {
    const id = req.params.idConsultado;
    const livro = livros.find(x => x.id === Number(id));

  if(livro){
    if(req.body.titulo){
        livro.titulo = req.body.titulo;
    }
    if(req.body.autor){
        livro.autor = req.body.autor;
    }
    if(req.body.ano){
        livro.ano = req.body.ano;
    }
    if(req.body.numPaginas){
        livro.numPaginas = req.body.numPaginas;
    }
        res.json({
            mensagem: "Livro alterado."
          })
    }else {
        res.json({
            mensagem: "Não existe livro a ser alterado para o ID informado."
          })
    }
})


app.delete('/livros/:idConsultado', (req, res) => {
    const id = req.params.idConsultado;
    const livro = livros.find(x => x.id === Number(id));

    if(livro){
        const indice = livros.indexOf(livro);
        livros.splice(indice, 1);
        res.json({
            mensagem: "Livro removido."
          })
    }else {
        res.json({
            mensagem: "Não existe livro a ser removido para o ID informado."
          })
    }
})


app.listen(8000);