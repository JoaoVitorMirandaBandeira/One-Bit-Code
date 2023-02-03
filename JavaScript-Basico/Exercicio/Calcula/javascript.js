let primeiroNumero = prompt("Digite um numero");
let segundoNumero = prompt("Disgite outro numero");

primeiroNumero = parseFloat(primeiroNumero);
segundoNumero = parseFloat(segundoNumero);

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

alert(
  "Os resultados são\n" +
    "Soma = " +
    soma +
    "\nSubtração = " +
    subtracao +
    "\nMultiplicação = " +
    multiplicacao +
    "\nDivisão = " +
    divisao
);
