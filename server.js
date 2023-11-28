// Imports
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
require('dotenv').config();


// Make a .env file (since it is in .gitignore) at the root of the working directory and include PORT number of your choice in it.
const PORT = process.env.PORT;


// Server Setup
const app = express();
const socket_server = require('http').Server(app);
const io = require('socket.io')(socket_server);


// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/static')));


// View configuration
app.set('view engine', 'njk');
nunjucks.configure(path.join(__dirname, '/views'), {
    autoescape: true,
    express: app,
    watch: true
});


// GET routes
app.get('/', (req, res) => {
    res.render('index.njk', { gameName: 'chowka-bara' });
});


// Run Server using the http socket server created.
socket_server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});