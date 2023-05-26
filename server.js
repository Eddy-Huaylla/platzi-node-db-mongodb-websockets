const express = require('express');
const bodyParser = require('body-parser');

const response = require('./response');
const router = require('./components/message/network');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : false } ) );
app.use( router );

app.use('app', express.static('public') );

app.listen(port);

console.log( 'App listenig in port: http://localhost:' + port );