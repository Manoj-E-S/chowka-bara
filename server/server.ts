// Imports
import express from "express";
import * as http from "http";
import * as socketio from "socket.io";

import bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();


// Make a .env file (since it is in .gitignore) at the root of the working directory and include PORT number of your choice in it.
const PORT = process.env.PORT;


// Server Setup
const app = express();
const socket_server = http.createServer(app);
const io = new socketio.Server(socket_server);


// Middleware
app.use(bodyParser.urlencoded({extended: true}));


// GET routes
app.get('/', (req, res) => {
    res.send("Server Running!");
});


// Run Server using the http socket server created.
socket_server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
