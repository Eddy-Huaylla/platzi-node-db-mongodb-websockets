const express = require('express');
const bodyParser = require('body-parser');
const { initEnv } = require('./utils/environment');
const { connect } = require('./utils/db');

initEnv();

const routes = require('./network/routes');

const { DB_URI } = require('./utils/const');

connect( DB_URI );

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : false } ) );

routes( app );

app.use('/app', express.static('public') );

app.listen( port );

console.log( 'App listenig in port: http://localhost:' + port );