// console.log("Inicio");
// setTimeout(() => console.log("Resultado demorado"), 1000);
// console.log("Fin");

// --- Callback

// function prepararPedido(callback) {
//   setTimeout(() => callback("Pedido preparado"), 1000);
// }

// prepararPedido((mensaje) => console.log(mensaje));

// --- Promesas

// import { prepararPedido } from './tarea.js';

// console.log(prepararPedido());

// prepararPedido(true)
//   .then((mensaje) => console.log(mensaje))
//   .catch((error) => console.log(error));

// --- async / await

// import { prepararPedido } from "./tarea.js";

// async function ejecutarPedido() {
//   try {
//     const mensaje = await prepararPedido(true);
//     console.log(mensaje);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ejecutarPedido();

// --- fetch

const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function obtenerUsuarios() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }

    const usuarios = await response.json();
    console.log(usuarios);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proceso de obtención de usuarios finalizado");
  }
}

obtenerUsuarios();
