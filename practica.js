// OBJETOS

const persona = {
  nombre: "Matias",
  apellido: "Ruiz",
  edad: 34,
  cabello: "calvo",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

persona.apodo = function () {
  return ("El " + this.cabello + " " + this.nombreCompleto()).toUpperCase();
};

function imprimirNombre() {
  console.log(
    "El usuario " + persona.nombre + " tiene " + persona.edad + " años."
  );
  console.log("Apellido:", persona.apellido);
  delete persona.apellido;
  console.log("Apellido:", persona.apellido);
  persona.apellido = "Gonzalez";
  console.log("Apellido:", persona.apellido);
}

function autos() {
  persona.autos = { auto1: "BMW", auto2: "Audi", auto3: "Ferrari" };
  const name = persona.nombreCompleto();
  console.log(
    "El segundo auto de " +
      persona.nombreCompleto() +
      " es un " +
      persona.autos.auto2
  );
  console.log(
    "El tercer auto de " +
      persona["nombre"] +
      " es un " +
      persona["autos"]["auto3"]
  );
  console.log(
    "El primer auto de " + name + " es un " + persona["autos"]["auto1"]
  );
}

function recorrerObjeto() {
  let texto = "";
  for (let x in persona) {
    texto += persona[x] + " ";
  }

  console.log(texto);
}

function verValores() {
  const misValores = Object.values(persona);
  console.log(misValores);
  const misClaves = Object.keys(persona);
  console.log(misClaves);
}

function objetosEnBucle() {
  let texto = "";
  for (let [clave, valor] of Object.entries(persona)) {
    texto += clave + ": " + valor + ";  ";
  }
  console.log(texto);
}

//CONSTRUCTORES

function Usuario(nombre, apellido, edad, cabello) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.cabello = cabello;
  this.nacionalidad = "Argentino";
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

const miPadre = new Usuario("Jorge", "Ruiz", 59, "calvo");

function creandoUsuario() {
  console.log("Mi padre es " + miPadre.nombre + ".");
}

const miMadre = new Usuario("María", "Gonzalez", 59, "rubio");
const miHermano = new Usuario("Gaston", "Ruiz", 59, "oscuro");

function creandoFamilia() {
  console.log(
    "Mi padre es " +
      miPadre.nombre +
      ", " +
      "mi madre es " +
      miMadre.nombre +
      " y mi hermano " +
      miHermano.nombre
  );
}

function hermanoAdoptado() {
  miHermano.nacionalidad = "Boliviano";
  console.log(
    "Mis padre es " +
      miPadre.nacionalidad +
      " pero mi hermano es " +
      miHermano.nacionalidad
  );
}

//Usuarios.prototype.nacionalidad = "Argentino" | si le quisiera agregar la nacionalidad al constructor

function probandoFunciones() {
  console.log(
    "Padre: " +
      miPadre.nombreCompleto() +
      ", Madre: " +
      miMadre.nombreCompleto() +
      ", Hermano: " +
      miHermano.nombreCompleto()
  );
}

miMadre.cambiarNombre = function (nombre) {
  this.nombre = nombre;
};

function probandoCambiarNombre() {
  console.log(miMadre.nombre);
  miMadre.cambiarNombre("Gladys");
  console.log(miMadre.nombre);
}
// console.log(miMadre.nombre);
// probandoCambiarNombre();
// console.log(miMadre.nombre);

Usuario.prototype.cambiarNombre = function (nombre) {
  this.nombre = nombre;
};

function cambioNombreGeneral() {
  console.log(miPadre.nombre);
  miPadre.cambiarNombre("Alberto");
  console.log(miPadre.nombre);
}

function expresionesRegulares() {
  console.log(miHermano.nacionalidad);
  let regex = /tino/;
  let resultado = regex.test(miHermano.nacionalidad);
  console.log(resultado);
}

function creandoColeccion() {
  let map = new Map();
  map.set("nombre", "Matias");
  map.set(123, "ID");
  console.log(map.get("nombre"), map.get(123));
}

function coleccionDeValoresUnicos() {
  let set = new Set();
  set.add(1);
  set.add(2);
  set.add(2); //No se añade porque ya está en el set
  console.log("Tamaño: ", set.size);
}
