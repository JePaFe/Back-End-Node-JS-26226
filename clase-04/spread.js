// const producto = {
//   nombre: "Mouse",
//   precio: 100,
//   stock: 5,
//   disponible: true,
//   descripcion: "Un mouse de alta calidad",
// };

// const nuevoProducto = {
//   ...producto,
//   oferta: true,
//   precio: 120,
// };

// delete nuevoProducto.descripcion;

// console.log(nuevoProducto);
// console.log(producto);

// ---

// const numeros = [1, 2, 3, 4, 5];

// const nuevosNumeros = [...numeros];
// nuevosNumeros.push(6);
// console.log(nuevosNumeros);
// console.log(numeros);

// ---

const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

const todosLosNumeros = [...numerosPares, ...numerosImpares];
console.log(todosLosNumeros);

numerosPares.push(12);
numerosImpares.push(11);

console.log(todosLosNumeros);
console.log(numerosPares);
console.log(numerosImpares);
