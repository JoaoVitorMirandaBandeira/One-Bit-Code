let numero = parseFloat(prompt("Por favor escolha um numero!"));
let resultado = "";
for (let contagem = 1; contagem <= 20; contagem++) {
  resultado = resultado + "-" + numero * contagem + "\n";
}
alert(resultado);
