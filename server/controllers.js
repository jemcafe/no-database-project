const axios = require('axios');
let pokemonArr = [];

module.exports = {
    getPokemon (req, res) {
      axios.get('http://pokeapi.co/api/v2/pokemon/1/').then( (response) => {
        res.send( response.data );
      }).catch( console.log() );
    }

    // postPokemon (req, res) {
    //   let {} = req.body
    // }

    // test (req, res) {
    //     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    // }
}