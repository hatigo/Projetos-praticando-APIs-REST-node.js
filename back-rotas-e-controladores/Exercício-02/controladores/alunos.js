const alunos = require('../dados/alunos');


function get(req, res) {
    res.json(alunos);
}


function verificarId(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);

    if (!id) {
        res.status('400');
        res.json({ erro: "O ID deve ser um número" });
        return;
    }
    if (!aluno) {
        res.status('404');
        res.json({ erro: `O aluno ${id} não existe` });
        return;
    }

    return true;
}

function getPorId(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);
    if (verificarId(req, res)) {
        res.json(aluno);
    }
}

let idDoProximoAluno = 1;

function post(req, res) {

    if (!req.body.nome || req.body.nome.trim().length === 0) {
        res.status('400');
        res.json({ erro: "o nome não foi inserido" });
        return;
    }


    if (!req.body.sobrenome || req.body.sobrenome.trim().length === 0) {
        res.status('400');
        res.json({ erro: "o sobrenome não foi inserido" });
        return;
    }


    if (!req.body.curso || req.body.curso.trim().length === 0) {
        res.status('400');
        res.json({ erro: "o curso não foi inserido" });
        return;
    }


    if (!req.body.idade) {
        res.status('400');
        res.json({ erro: "A idade não foi inserida" });
        return;
    }

    if (req.body.idade < 18) {
        res.status('400');
        res.json({ erro: "O aluno tem que ser maior de idade" });
        return;
    }

    alunos.push({
        id: idDoProximoAluno,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    });

    idDoProximoAluno++;

    res.status('201');
    res.json();


}

function apagar(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);
    const indice = alunos.indexOf(aluno);

    if (verificarId(req, res)) {
        alunos.splice(indice, 1);
        res.status('200');
        res.json(aluno);
    }


}


module.exports = { get, getPorId, post, apagar };
