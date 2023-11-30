# chowka-bara
The classic Indian board game, reinvented as a web-game. Play with your friends and NRI-cousins online, relive your childhood.

# Prerequisites:

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://angular.io/) installed

# Installation:

- Install the packages using npm for both server and client:
```bash
cd server
npm install
cd ..
cd chowka-bara-client
npm install
```
- Create a .env file and specify the variable PORT (in all caps) to listen to:

### UNIX
```bash
cd server
touch .env
```
### Windows
```bash
cd server
notepad .env
```

# Build and Run the Server
- For production
```bash
cd server
npm run build
npm run start
```
- For Development
```bash
cd server
npm run build
npm run devstart
```

# Run the Angular App:
- For Development only
```bash
cd chowka-bara-client
ng serve --open
```
