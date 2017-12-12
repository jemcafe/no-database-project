const axios = require('axios');
let pokemonArr = [];

module.exports = {
    getPokemon (req, res) {
      axios.get(`http://pokeapi.co/api/v2/pokemon/`).then( (response) => {
        res.send( response.data.results );
        console.log( pokemonArr );
      }).catch( console.log() );
    },

    getPokemonTeam (req, res) {
      res.json( pokemonArr );
    },

    postPokemon (req, res) {
      pokemonArr.push( req.body.name );
      res.json( pokemonArr );
      console.log( pokemonArr )
    },

    editPokemon (req, res) {
      pokemonArr[req.params.index] = req.body.name;
      res.json( pokemonArr );
      console.log( pokemonArr );
    },

    deletePokemon (req, res) {
      pokemonArr.splice(req.params.index, 1 );
      res.json( pokemonArr );
      console.log( pokemonArr );
    }

    // test (req, res) {
    //     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    // }
}