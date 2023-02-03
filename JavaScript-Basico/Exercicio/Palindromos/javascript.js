const palavra = prompt("Por favor digite uma palavra:");
let palavraInvertida = palavra.split("").reverse().join("");
if (palavra === palavraInvertida) {
  alert("Essa palavra e um Palíndromo");
} else alert("Essa palavra não e um Palíndromo");
