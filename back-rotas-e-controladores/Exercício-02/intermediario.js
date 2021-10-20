


function intermediario( req, res, next){
    const senha = req.query.senha;
    if(senha !== "cubos123"){
        res.json({ erro: "senha incorreta"});
        return;
    }
    next();
}


module.exports = intermediario;