// Imports
const express = require('express');
const bodyParser = require('body-parser');
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


// GET routes
app.get('/', (req, res) => {
    res.json({ test: 'data' });
});


// Run Server using the http socket server created.
socket_server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});