export const productos = [
  { nombre: "Cuaderno", precio: 4500 },
  { nombre: "Mochila", precio: 28000 },
];

export function mostrarProducto(producto) {
  return `${producto.nombre}: $${producto.precio}`;
}

export function aplicarDescuento(producto, porcentaje) {
  return {
    ...producto,
    precio: producto.precio * (1 - porcentaje / 100),
  };
}
