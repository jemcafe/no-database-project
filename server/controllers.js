const axios = require('axios');
let pokemonArr = [];

module.exports = {
    getPokemon (req, res) {
      axios.get(`http://pokeapi.co/api/v2/pokemon/`).then( (response) => {
        res.send( response.data.results );
        console.log( pokemonArr );
      }).catch( console.log() );
    },

    postPokemon (req, res) {
      pokemonArr.push( req.body.name );
      res.json( pokemonArr );
      console.log( pokemonArr )
    },

    // editPokemon (req, res) {
    //   pokmonArr = pokemonArr.map( (e, i) => {
    //     if ( req.body.name === pokemon ) {
    //       pokemonArr.splice( i, 1, body.request.name);
    //     }
    //   })
    // },

    // deletePokemon (req, res) {
    //   if (  ) {
    //     pokemonArr.splice(  );
    //   }
    // }

    // test (req, res) {
    //     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    // }
}