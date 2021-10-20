const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
app.use(express.json());

app.get('/pokemon', (req, res) => {
    const offset = req.query.inicio;
    const limit = req.query.quantidade;
    const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);

    pokemonPromise.then(response => {
        res.json(response.data.results);
    })

})

app.get('/pokemon/:idOuNome', (req, res)=>{
    const idOuNome = req.params.idOuNome;
    const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

    pokemonPromise.then(response => {
        res.json({
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            base_experience: response.data.base_experience,
            forms: response.data.forms,
            abilities: response.data.abilities,
            species: response.data.species
        });
    })
})

app.listen(8000);