const url = "https://jsonplaceholder.typicode.com/users/7";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`No se pudo obtener el usuario: ${response.status}`);
//     }

//     return response.json();
//   })
//   .then((user) => {
//     const { name: nombre, email } = user;
//     const { city } = user.address;

//     console.log(`${nombre} — ${email} — ${city}`);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

async function obtenerUsuario() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`No se pudo obtener el usuario: ${response.status}`);
    }

    const user = await response.json();

    const { name: nombre, email } = user;
    const { city } = user.address;

    console.log(`${nombre} — ${email} — ${city}`);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Operación finalizada");
  }
}

obtenerUsuario();
