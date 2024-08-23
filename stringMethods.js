//STRING METHODS

function contarLargo(s) {
  return s.length;
}

// console.log(contarLargo("HELLO WORLD"));

function extraerCaracterEspecifico(s, i) {
  return s.charAt(i);
}

// console.log(extraerCaracterEspecifico("HELLO WORLD", 4));

function extraerConAt(s, i) {
  return s.at(i);
}

function extraerConAt2(s, i) {
  return s[i];
}

// console.log(extraerConAt2("HELLO WORLD", 8));

function extraerUnaParte(string, start, end) {
  return string.slice(start, end);
}

// console.log(extraerUnaParte("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1, 4));
// console.log(extraerUnaParte("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 15));
// console.log(extraerUnaParte("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -5));
// console.log(extraerUnaParte("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -8, -5));

function extraerConSubstring(string, start, end) {
  return string.substring(start, end);
}

//console.log(extraerConSubstring("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1, 4));
//console.log(extraerConSubstring("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -8, -5)); // La diferencia es que trata lo menos a 0 como 0

function extraerConSubstr(string, start, length) {
  return string.substr(start, length);
}
//console.log(extraerConSubstr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18, 3));
//console.log(extraerConSubstr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1, 4));
// console.log(extraerConSubstr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5));
//console.log(extraerConSubstr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -5));

function upperLowerCase(s) {
  console.log(s);
  console.log(s.toLowerCase());
  console.log(s.toUpperCase());
}

// upperLowerCase("ANHJkishfKHShs");

function concatenarTextos() {
  let text1 = "Hola";
  let text2 = "mundo";
  let text3 = text1.concat(" ", text2);
  console.log(text3);
}

function quitarEspacio(s) {
  console.log(s.trim());
  console.log(s.trimStart());
  console.log(s.trimEnd());
}

function repetir(s, copies) {
  return s.repeat(copies);
}

// console.log(repetir("Hola mati!", 5));

function reemplazarContenido(s, reemplazado, reemplazador) {
  return s.replace(reemplazado, reemplazador);
}

// console.log(reemplazarContenido("Hola mati!", "mati", "gladys"));
//console.log(reemplazarContenido("Hola mati!", "MATI", "gladys"));
//console.log(reemplazarContenido("Hola mati!", /MATI/i, "gladys")); // Expresión regular insensitiva
//console.log(reemplazarContenido("Hola mati!", /mati/g, "gladys")); // Expresión regular global match

function reemplazarVarios(s, reemplazado, reemplazador) {
  return s.replaceAll(reemplazado, reemplazador);
}

// console.log(
//   reemplazarVarios(
//     "I love cats, cats are very easy to love, cats are very popular.",
//     "cats",
//     "dogs"
//   )
// );

function convertirEnArray(s, separador) {
  return s.split(separador);
}

// console.log(convertirEnArray("Bananas, Peras, Kiwis", ","));
// console.log(convertirEnArray("Bananas, Peras, Kiwis", " "));
// console.log(convertirEnArray("Bananas, Peras, Kiwis", ""));

///////////STRING SEARCH
function encontrarIndexSubstring(text, substring, i) {
  let index = text.indexOf(substring, i); //Empieza a contar desde el indice
  return index;
}

// console.log(
//   encontrarIndexSubstring("Please locate where 'locate' occurs!", "locate", 10)
// );

function ultimoAparicionSubstring(text, substring, i) {
  let lastIndex = text.lastIndexOf(substring, i);
  return lastIndex;
}

// console.log(
//   ultimoAparicionSubstring("Please locate where 'locate' occurs!", "locate", 15)
// );

function buscador(text, substring) {
  let index = text.search(substring);
  return index;
}

// console.log(buscador("Please locate where 'locate' occurs!", /locate/));

function coincidencia(text, substring) {
  let result = text.match(substring);
  return result;
}

// console.log(
//   coincidencia("The rain in SPAIN stays mainly in the plain", /ain/gi)
// );
// RESPUESTA [
//   'main',
//   index: 24,
//   input: 'The rain in SPAIN stays mainly in the plain',
//   groups: undefined
// ]

function todasLasCoincidencias(text, substring) {
  const iterator = text.matchAll(substring);
  return Array.from(iterator);
}

// console.log(
//   todasLasCoincidencias(
//     "I love cats. Cats are very easy to love. Cats are very popular.",
//     "Cats"
//   )
// );

function incluye(text, substring, i) {
  const response = text.includes(substring, i);
  return response;
}

// console.log(incluye("Hello world, welcome to the universe.", "world", 12)); //devuelve un booleano

function comienzaCon(text, substring, i) {
  const response = text.startsWith(substring, i);
  return response;
}

// console.log(comienzaCon("Hello world, welcome to the universe.", "world", 6)); //devuelve un booleano

function terminaCon(text, substring, i) {
  const response = text.endsWith(substring, i);
  return response;
}

// console.log(terminaCon("Hello world, welcome to the universe.", "world", 11));

let textPrueba = ` The quick
brown fox
jumps over
the lazy dog`;

// console.log(textPrueba);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

//console.log(total)

function HTMLFruta(header, tags) {
  let html = `<h2>${header}</h2><ul>`;
  for (const x of tags) {
    html += `<li>${x}</li>`;
  }
  html += `<ul>`;

  return html;
}

// console.log(
//   HTMLFruta("Template Strings", ["template strings", "javascript", "es6"])
// )

function alInfinito(myNumber) {
  while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(myNumber);
  }
}

// alInfinito(2);

// console.log(Number.POSITIVE_INFINITY);
// console.log(1 / 0);

// console.log(Number.NEGATIVE_INFINITY);
// console.log(-1 / 0);
