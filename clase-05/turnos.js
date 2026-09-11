export function mostrarTurno(turno) {
  return `${turno.paciente} - ${turno.especialidad} - ${turno.hora}`;
}

export function confirmarTurno(turno) {
  return {
    ...turno,
    estado: "confirmado",
  };
}
