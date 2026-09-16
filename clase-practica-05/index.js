// console.log(import.meta.url);

import { productos, mostrarProducto, aplicarDescuento } from "./productos.js";
import pc from "picocolors";

console.log(pc.green("Control de stock iniciado"));

// console.log("Productos disponibles:", productos);

productos.forEach(producto => {
  console.log(pc.blue(mostrarProducto(producto)));
});

const productoConDescuento = aplicarDescuento(productos[0], 10);
console.log(pc.yellow("Producto con descuento:", mostrarProducto(productoConDescuento)));

console.log(pc.red("Control de stock finalizado"));