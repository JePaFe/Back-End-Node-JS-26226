// const nombres = ["Mouse", "Keyboard", "Monitor", "Printer"];

// nombres.forEach((nombre) => {
//   console.log(`${nombre}`);
// });

// ---

// const nombre = "Mouse";
// const precio = 100;
// const stock = 5;

// const producto = ["Mouse", 100, 5];
// console.log(producto);

// const producto = {
//   nombre: "Mouse",
//   precio: 100,
//   stock: 5,
//   disponible: false,
//   resumen() {
//     return `${this.nombre} - $${this.precio}`;
//   },
// };

// // console.log(producto.precio);

// // // const propiedad = "stock";
// // // console.log(producto[propiedad])

// // producto.precio = 110;

// // producto.categorias = ["Periféricos", "Hardware"];

// // delete producto.nombre;

// // console.log(producto);

// console.log(producto.resumen());

// ---

const productos = [
  {
    nombre: "Mouse",
    precio: 100,
    stock: 5,
    disponible: false,
  },
  {
    nombre: "Keyboard",
    precio: 150,
    stock: 10,
    disponible: true,
  },
  {
    nombre: "Monitor",
    precio: 200,
    stock: 7,
    disponible: true,
  },
  {
    nombre: "Printer",
    precio: 120,
    stock: 3,
    disponible: false,
  },
];

// console.log(productos[1].precio);

// const precios = productos.map(producto => producto.precio);
// console.log(precios);

const productosDisponibles = productos.filter(
  (producto) => producto.disponible,
);
console.log(productosDisponibles);

const nombresDisponibles = productosDisponibles.map(
  (producto) => producto.nombre,
);
console.log(nombresDisponibles);
