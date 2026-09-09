const reserva = {
  huesped: "Lara",
  habitacion: 204,
  noches: 3,
  estado: "pendiente",
  mostrarResumen() {
    return `${this.huesped}: habitación ${this.habitacion}, ${this.noches} noches`;
  },
};

console.log(reserva);
console.log(reserva.mostrarResumen());

reserva.apellido = "Perez";
reserva.precio = 100;
