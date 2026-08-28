// function saludar() {
//   const saludo = "Hola, mundo!";
//   console.log(saludo);
// }

// saludar();
// saludar();
// saludar();

// ---

// function sumar(a, b) {
//   const resultado = a + b;
//   //   console.log(resultado, typeof resultado);
//   return resultado;
// }

// let resultado = sumar(3, 5);
// console.log(resultado);
// resultado = sumar(10, 20);
// console.log(resultado);

// resultado = sumar("1", -2);
// console.log(resultado);

// ---

// Funcion declarada
// function multiplicar(a, b) {
//   const resultado = a * b;
//   return resultado;
// }

// // Funcion expresada
// const multiplicar = function (a, b) {
//   const resultado = a * b;
//   return resultado;
// };

// Funcion de flecha o arrow function
// const multiplicar = (a, b) => a * b;

// const resultadoMultiplicacion = multiplicar(4, 5);
// console.log(resultadoMultiplicacion);

// ---

// function saludar(nombre) {
//     // return "Hola, " + nombre + "!"; // concatenación de strings
//     return `Hola, ${nombre}!`; // template literal
// }

// const saludar = function (nombre) {
//   return `Hola, ${nombre}!`;
// };

// const saludar = nombre => `Hola, ${nombre}!`;

// console.log(saludar("Juan"));
// console.log(saludar("María"), saludar("Pedro"));

// ---

// Funciones de orden superior

// Una función de orden superior es aquella que recibe otra función como argumento o devuelve una función.

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function calculadora(a, b, operacion) {
  return operacion(a, b);
}

calculadora(4, 5, sumar);
calculadora(9, 2, restar);
