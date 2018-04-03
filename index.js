<<<<<<< HEAD
const server = require("./src/server");
const { port } = require("./settings");

server().listen(port, () => console.log("Up on port", port));
=======
const server = require('./server');

const PORT = process.env.PORT || (3000);

server()
  .listen(PORT, () => console.log('Up on port', PORT));
>>>>>>> Escrever uma file por dia de log
