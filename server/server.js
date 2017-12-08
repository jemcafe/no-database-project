const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cntrls = require('./controllers');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );



app.get('/api/test', cntrls.test);



const PORT = 3030;

app.listen( PORT, () => console.log( "listening to: " + PORT ));