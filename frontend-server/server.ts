// Imports
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();


// Make a .env file (since it is in .gitignore) at the root of the working directory and include PORT number of your choice in it.
const PORT = process.env.PORT || 2529;


// Server Setup
const app = express();


// Middleware
app.use('/', express.static(path.join(__dirname, '../../chowka-bara-client/dist/chowka-bara-client/browser')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Serve index.html on hitting any endpoint, and let angular do the rest of the routing
app.get('/*', (req, res) => {
    res.sendFile('/index.html');
});


// Run Server using the Express app created.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
