function saludar(nombre) {
  console.log("Hola, " + nombre);
}

function procesarEntradaUsuario(n, callback) {
  const nombre = n;
  callback(nombre);
}

// procesarEntradaUsuario("Juan", saludar);

function mostrarMensaje() {
  console.log("Espere, estamos procesando sus datos...");
}

// setTimeout(mostrarMensaje, 3000);

function calcular(a, b, operacion) {
  return operacion(a, b);
}

function sumar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

console.log(calcular(5, 10, sumar));
console.log(calcular(5, 10, multiplicar));
