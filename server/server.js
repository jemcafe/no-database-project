const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cntrls = require('./controllers');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );  //middleware



// app.get('/api/test', cntrls.test);

app.get('/api/pokemon', cntrls.getPokemon );

app.get('/api/pokemonteam', cntrls.getPokemonTeam );

app.post('/api/newpokemon', cntrls.postPokemon );

// app.put('api/changename', cntrls.postPokemon );

app.delete('/api/removepokemon/:index', cntrls.deletePokemon );



const PORT = 3030;

app.listen( PORT, () => console.log( "listening to: " + PORT ));