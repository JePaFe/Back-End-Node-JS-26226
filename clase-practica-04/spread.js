const reserva = {
  habitacion: 204,
  huesped: "Lara",
  noches: 3,
  estado: "confirmada",
};

const reservaVip = {
  ...reserva,
  estado: "confirmada",
  precio: 500,
};

// console.log(reserva);
// console.log(reservaVip);

// ---

const reservasAConfirmar = [
  {
    habitacion: 204,
    huesped: "Lara II",
    noches: 3,
    estado: "pendiente",
  },
  {
    habitacion: 205,
    huesped: "Carlos",
    noches: 2,
    estado: "pendiente",
  },
];

const reservasConfirmadas = [reserva, reservaVip];

const reservas = [...reservasAConfirmar, ...reservasConfirmadas];

console.log(reservas);
