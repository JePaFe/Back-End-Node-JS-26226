const temperaturas = [18, "32", 'Hola', 27, 44, -6, 20];

// function mostrarTemperatura(temperatura) {

//   console.log(`Temperatura: ${temperatura} °C`);
// }

// mostrarTemperatura(temperaturas[0]);
// mostrarTemperatura(temperaturas[1]);
// mostrarTemperatura(temperaturas[2]);

// temperaturas.forEach(mostrarTemperatura);

// temperaturas.forEach(temperatura => {
//   console.log(`Temperatura: ${temperatura} °C`);
// });

// ---

// function convertirAFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// const temperaturasFahrenheit = temperaturas.map(convertirAFahrenheit);

// console.log(temperaturasFahrenheit);
// console.log(temperaturas);

// ---

// console.log(temperaturas);

// temperaturas.push(25);

// console.log(temperaturas);

// ---

function esTemperaturaCalida(temperatura) {
  if (typeof temperatura === "string") {
    return false;
  }
  return temperatura >= 25;
}

const temperaturasCalidas = temperaturas.filter(esTemperaturaCalida);

console.log(temperaturasCalidas);
