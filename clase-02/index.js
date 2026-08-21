// console.log("Hola Nodes.js Clase 2");
// // REPL

// console.log(process.platform);
// console.log(process.version);

// console.log(document); // This will throw an error because 'document' is not defined in Node.js

// ---

// console.log(process.cwd()); // This will log the current working directory of the Node.js process

// const args = process.argv; // This will log the command-line arguments passed to the Node.js process

// console.log(args[3]);

// ---

console.log("Inicio");

setTimeout(function () {
  console.log("Proceso terminado 1");
}, 3000);

setTimeout(function () {
  console.log("Proceso terminado 2");
}, 200);

setTimeout(function () {
  console.log("Proceso terminado 3");
}, 1000);

console.log("Otra linea");

console.log("Fin");
