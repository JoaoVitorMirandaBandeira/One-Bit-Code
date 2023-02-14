"use strict";

//Calcula a media simples
function simpleMedia() {
  for (var _len = arguments.length, number = new Array(_len), _key = 0; _key < _len; _key++) {
    number[_key] = arguments[_key];
  }
  var sum = number.reduce(function (accu, curr) {
    return accu + curr;
  }, 0);
  var length = number.length;
  return sum / length;
}
console.log(simpleMedia(1, 2, 3, 4));

//Calcula a media ponderada
function weightedMedia() {
  for (var _len2 = arguments.length, number = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    number[_key2] = arguments[_key2];
  }
  console.log(number);
  var sum = number.reduce(function (accu, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return accu + n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  console.log(sum);
  var sumWeight = number.reduce(function (accu, _ref2) {
    var p = _ref2.p;
    return accu + p;
  }, 0);
  console.log(sumWeight);
  return sum / sumWeight;
}
console.log(weightedMedia({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));

//Calcular a mediana
function median() {
  for (var _len3 = arguments.length, number = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    number[_key3] = arguments[_key3];
  }
  var sequence = number.sort(function (a, b) {
    return a - b;
  });
  console.log(sequence);
  var center = Math.trunc(number.length / 2);
  if (number.length % 2 == 1) {} else {
    console.log((sequence[center] + sequence[center - 1]) / 2);
  }
}

//Calculando a moda
function moda() {
  for (var _len4 = arguments.length, number = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    number[_key4] = arguments[_key4];
  }
  var contagem = number.map(function (num) {
    return [num, number.filter(function (n) {
      return num === n;
    }).length];
  });
  var ordenar = contagem.sort(function (a, b) {
    return b[1] - a[1];
  });
  return ordenar[0][0];
}
