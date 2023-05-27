const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./network/routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : false } ) );

routes( app );

app.use('app', express.static('public') );

app.listen( port );

console.log( 'App listenig in port: http://localhost:' + port );