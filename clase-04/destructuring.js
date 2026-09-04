// const producto = {
//   stock: 5,
//   nombre: "Mouse",
//   precio: 100,
// };

// // console.log(producto.nombre);
// // console.log(producto.precio);

// // let nombreProducto = producto.nombre;
// // let precioProducto = producto.precio;

// // console.log(nombreProducto, precioProducto);

// const { precio, nombre, oferta } = producto;

// console.log(nombre, precio, oferta)

// ---

const nombres = ["Juan", "María", "Pedro", "Ana"];

// const [primerNombre, segundoNombre] = nombres;
// console.log(primerNombre, segundoNombre);

// const nombreCuatroElemento = nombres[3]

// const [, , , cuartoNombre] = nombres;
// console.log(cuartoNombre);

const nombre = nombres.find(n => n === "Ana");
console.log(nombre);