import os from "node:os";

export function mostrarEntorno() {
  return `Sistema: ${os.platform()} | Arquitectura: ${os.arch()}`;
}
