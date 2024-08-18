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

//STRING SEARCH
