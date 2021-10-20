const instance = require('../services/company_enrichment');
const fs = require('fs');
const { json } = require('express');

const findCompany = async (req, res) => {
    const domain = req.params.domain;
    
    try {
        const companyData = await instance.get(`?domain=${domain}`);
        if(!companyData.data.name){
            res.json(companyData.data);
            return;
        }

        let empresas = {
            empresas: []
        };
        fs.readFile('empresas.json', 'utf8',(err, data)=>{
            if(err){
                console.log(err);
            }else {
                empresas = JSON.parse(data);
                empresas.empresas.push(companyData.data);
                fs.writeFile('empresas.json', JSON.stringify(empresas), err =>{
                    console.log(err);
                })
            }
        })

       
         res.json(companyData.data);
    }catch(error) {
        res.send('DEU RUIM');
        console.log(error);
    }
}


module.exports = {findCompany};