const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
// console.log(cars.toString());
// console.log(typeof cars);

const myFunction = () => {
  return "Hola";
};

const array = [];
array[0] = Date.now();
array[1] = cars;
array[2] = myFunction;

// console.log(array[2]());

////////// ARRAY PROPERTIES AND METHODS

// console.log(cars.length);
// console.log(cars.sort());
// console.log(cars[cars.length - 1]);

function recorrerElArray(arr) {
  let html = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    html += "<li>" + arr[i] + "</li>";
  }
  html += "</ul>";

  return html;
}

// console.log(recorrerElArray(["Banana", "Orange", "Apple", "Mango"]));

// cars.push("Audi");
// console.log(cars.sort());
// cars[cars.length] = "Ferrari";
// console.log(cars.sort());
// console.log(Array.isArray(cars));
// console.log(cars instanceof Array);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "x3", "x5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

function recorrerArrayAnidado() {
  let x = "";
  for (let i in myObj.cars) {
    x += "| " + myObj.cars[i].name + ": ";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j] + ", ";
    }
  }
  console.log(x);
}

// recorrerArrayAnidado();

///////////////// ARRAY METHODS

// console.log(cars.length);
// console.log(cars.toString());
// console.log(cars.at(2));
// console.log(cars[1]);
// console.log(cars.join(" | "));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);
// let fruit = fruits.pop();
// console.log("Deleted fruit: ", fruit);
// fruits.push("Kiwi");
// console.log(fruits);
// let length = fruits.push("Tangerine");
// console.log(length, fruits);
// fruits.shift();
// console.log(fruits);
// let removedFruit = fruits.shift();
// console.log(removedFruit, fruits);
// fruits.unshift("Lemon");
// console.log(fruits);
// let newLength = fruits.unshift("Melon");
// console.log(newLength, fruits);
// fruits[fruits.length] = "Banana"; ///wow
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// // console.log(myChildren)
// const arr = ["Robin", "Morgan"];
// const childrens = myGirls.concat(myBoys, arr);
// // console.log(childrens);
// const myAnotherChildrens = childrens.concat("Peter");
// console.log(myAnotherChildrens);
// console.log(myAnotherChildrens.copyWithin(2, 0));
// console.log(myAnotherChildrens.copyWithin(2, 0, 3));

function aplanarMultidimensional(arr) {
  return arr.flat();
}

let aplanado = aplanarMultidimensional([
  [1, 2],
  [3, 4],
  [5, 6],
]);

const aplanadoMapeado = aplanado.flatMap((x) => [x, x * 10]);
// console.log(aplanadoMapeado)

// RESULTADO [
//     1, 10,  2, 20,  3,
//    30,  4, 40,  5, 50,
//     6, 60
//  ]

///// SPLICING AND SLICING

const animals = ["Dog", "Cat", "Parrot", "Fish"];
// animals.splice(2, 0, "Bird", "Cow");
// console.log(animals);
// const removed = animals.splice(4, 2, "Monkey", "Elephant");
// console.log(removed, animals);
// animals.splice(0, 1);
// console.log(animals);
// console.log(animals.splice(0, 1));

function agregar(list, start, remove, ...add) {
  list.splice(start, remove, ...add);
  return list;
}

// console.log(agregar(animals, 2, 0, "Bird", "Cow"));

// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.toSpliced(0, 1));
// console.log(months);
// console.log(months.splice(0, 1));
// console.log(months);

const planets = ["Earth", "Mars", "Pluto", "Mercury", "Uranus", "Venus"];
const list = planets.slice(2);
// console.log(list, planets);
const partSelected = planets.slice(1, 4);
//console.log(partSelected);

function cortador(list, start, end) {
  let result = list.slice(start, end);
  return result;
}

// console.log(cortador(planets, 1, 4))

//////////////// ARRAY SEARCH

function indexDe(arr, word, i) {
  return arr.indexOf(word, i);
}

// console.log(indexDe(planets, "Earth", 1))

function lastIndexDe(arr, word, i) {
  return arr.lastIndexOf(word, i);
}

// console.log(lastIndexDe(planets, "Uranus", 3));

function incluye(arr, word) {
  return arr.includes(word);
}

// console.log(incluye(planets, "Venus"));

function encontrarElPrimeroQueCumpleUnaCondicion(arr, fn) {
  let first = arr.find(fn);
  return first;
}

function myFunction2(value, index, array) {
  return value > 18;
}

const numeros = [4, 9, 16, 25, 29];

console.log(encontrarElPrimeroQueCumpleUnaCondicion(numeros, myFunction2));

function encontrarIndex(arr, callback) {
  let first = arr.findIndex(callback);
  return first;
}

console.log(encontrarIndex(numeros, myFunction2));

function encontrarUltimo(arr, callback) {
  return arr.findLast(callback);
}

console.log(encontrarUltimo([27, 28, 30, 40, 42, 35, 30], (x) => x > 40));

function encontrarIndexUltimo(arr, callback) {
  return arr.findLastIndex(callback);
}

console.log(encontrarIndexUltimo([27, 28, 30, 40, 42, 35, 30], (x) => x > 40));
