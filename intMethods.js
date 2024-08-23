function cambiandoBase(BaseList, myNumber) {
  for (let i = 0; i < BaseList.length; i++) {
    console.log(`Base ${BaseList[i]}:`, myNumber.toString(BaseList[i]));
  }
}

// cambiandoBase([2, 8, 10, 12, 16, 32, 36], 32);

let maximoPreciso = Number.MAX_SAFE_INTEGER;
let minimoPreciso = Number.MIN_SAFE_INTEGER;
let maximo = Number.MAX_VALUE;
let minimo = Number.MIN_VALUE;

// console.log(maximoPreciso, minimoPreciso);
// console.log(maximo, minimo);

// console.log(Number.isInteger(10.5));
// console.log(Number.isSafeInteger(12345678901234567890));

// console.log((123).toString(), (300 + 20 + 1).toString());

// let prueba = 9.656;
// console.log(
//   prueba.toExponential(2),
//   prueba.toExponential(4),
//   prueba.toExponential(6)
// );

// console.log(
//   prueba.toFixed(0),
//   prueba.toFixed(2),
//   prueba.toFixed(4),
//   prueba.toFixed(6)
// );

// console.log(
//   prueba.toPrecision(),
//   prueba.toFixed(2),
//   prueba.toFixed(4),
//   prueba.toFixed(6)
// );

// let numObjeto = new Number(3);
// console.log(numObjeto, typeof numObjeto);
// console.log(numObjeto.valueOf(), typeof numObjeto.valueOf());

////// CONVERTIR VARIABLES A NÚMEROS

// console.log(
//   Number(true),
//   Number(false),
//   Number("10"),
//   Number("  10"),
//   Number("10  "),
//   Number(" 10  "),
//   Number("10.33"),
//   Number("10,33"),
//   Number("10 33"),
//   Number("John")
// );

// console.log(Number(new Date("1990-07-28")), Number(new Date("1970-01-01")));

// console.log(
//   parseInt("-10"),
//   parseInt("-10.33"),
//   parseInt("10"),
//   parseInt("10.33"),
//   parseInt("10 20 30"),
//   parseInt("10 years"),
//   parseInt("years 10")
// );

// console.log(
//   parseFloat("10"),
//   parseFloat("10.33"),
//   parseFloat("10 20 30"),
//   parseFloat("10 years"),
//   parseFloat("years 10")
// );

//////////////////// NUMBER PROPERTIES

// console.log(Number.EPSILON);

let a = 0.1 + 0.2;
let b = 0.3;

// console.log(a === b);
// console.log(Math.abs(a - b) < Number.EPSILON);

function sonNumerosSuficientementeCercanos(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}

// console.log(sonNumerosCercanos(0.1 + 0.2, 0.3));

function sumaDeFlotantes(num, iterator) {
  let accum = 0;
  for (let i = 0; i < iterator; i++) {
    accum += num;
  }
  return accum;
}

// console.log(sumaDeFlotantes(0.1, 10));
// console.log(sonNumerosSuficientementeCercanos(sumaDeFlotantes(0.1, 10), 1));
