const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Envio un respuesta");
});

server.listen(3001, () => {
  console.log(`http://localhost:3001`);
});
