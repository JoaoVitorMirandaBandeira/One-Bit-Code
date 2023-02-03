let opcao = "";

//Menu
do {
  let resultado;
  opcao = prompt(
    "Bem vindo a calculadora geometrica\n1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do cículo\n6-Sair"
  );
  switch (opcao) {
    case "1": //Área do triângulo
      resultado = areaTriangulo();
      break;
    case "2":
      resultado = areaRetangulo();
      break;
    case "3":
      resultado = areaQuadrado();
      break;
    case "4":
      resultado = areaTrapezio();
      break;
    case "5":
      resultado = areaCirculo();
      break;
    case "6":
      alert("Encerrando...");
    default:
      break;
  }
  if (resultado) {
    alert("Area = " + resultado);
  }
} while (opcao !== "6");
//Menu

//Funções
function areaTriangulo() {
  let base = parseFloat(prompt("Informe o medida da base:"));
  let altura = parseFloat(prompt("Informe a altura:"));
  return (base * altura) / 2;
}
function areaRetangulo() {
  let base = parseFloat(prompt("Informe o medida da base:"));
  let altura = parseFloat(prompt("Informe a altura:"));
  return base * altura;
}
function areaQuadrado() {
  let base = parseFloat(prompt("Informe o medida do lado:"));
  return base * base;
}
function areaTrapezio() {
  let baseMaior = parseFloat(prompt("Informe o medida da base maior:"));
  let baseMenor = parseFloat(prompt("Informe o medida da base menor:"));
  let altura = parseFloat(prompt("Informe a altura:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaCirculo() {
  let raio = parseFloat(prompt("Informe o medida do raio:"));
  let pi = 3.14;
  return pi * (raio * raio);
}
//Funções
