//                1    2   3   4
const precios = [100, 70, 50, 120];
//                0    1   2   3

// console.log(precios[1]);
// console.log(precios.length);

// const mostrar = (item) => console.log(item);

// precios.forEach(precio => console.log(precio));

const numeros = [1, 2, 3, 4, 5];

function par_o_impar(num) {
  if (num % 2 == 0) {
    return "par";
  }

  return "impar";

  //   return num % 2 == 0 ? "par" : "impar";
}

const numerosTexto = numeros.map(par_o_impar);
console.log(numerosTexto);
