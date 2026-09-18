export function prepararPedido(debeFallar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!debeFallar) {
        resolve({ mensaje: "Pedido preparado", timestamp: Date.now() });
      } else {
        reject("Error al preparar el pedido");
      }
    }, 1000);
  });
}
