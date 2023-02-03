let medida = prompt("Digite sua medida em metros por favor:");
medida = parseFloat(medida);
let unidade = prompt(
  "Para qual unidade converter : \nmilímetro (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nquilômetro (km)"
);

switch (unidade) {
  case "mm":
    alert("Medida : " + (medida = medida * 1000) + "mm");
    break;
  case "cm":
    alert("Medida : " + (medida = medida * 100) + "cm");
    break;
  case "dm":
    alert("Medida : " + (medida = medida * 10) + "dm");
    break;
  case "dam":
    alert("Medida : " + (medida = medida / 10) + "dam");
    break;
  case "hm":
    alert("Medida : " + (medida = medida / 100) + "hm");
    break;
  case "km":
    alert("Medida : " + (medida = medida / 1000) + "km");
    break;
  default:
    alert("Unidade não existe");
}
