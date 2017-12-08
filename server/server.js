const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cntrls = require('./controllers');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

// This is to test the server
// This get server's API data and the controls are in the module
    // This is what it looks like without the module.exports in the controllers file
    // app.get('/api/test', (req, res) => {
    //     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    // });
app.get('/api/test', cntrls.test);

const PORT = 3030;

app.listen( PORT, () => console.log( "listening to: " + PORT ));