const imoveis = require('../dados/imoveis');


function get(req, res) {
    res.json(imoveis);
};

function getPorId(req, res) {
    const id = req.params.idConsultado;
    const imovelProcurado = imoveis.find(imovel => imovel.id === Number(id));
    if (!imovelProcurado) {
        res.status("404");
        res.json({ erro: "O imovel procurado não existe !" });
        return;
    }
    res.json(imovelProcurado);
};


module.exports = {get, getPorId};