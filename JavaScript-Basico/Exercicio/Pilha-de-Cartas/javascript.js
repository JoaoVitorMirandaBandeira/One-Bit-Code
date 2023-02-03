let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Quantas castas temos no baralho\n" +
      baralho.length +
      "\nEscolha uma das opções abaixo\n1-Adicionar uma carta\n2-Retirar uma carta\n3-Fechar"
  );
  switch (opcao) {
    case "1":
      baralho.push(prompt("Qual nome da carta que vc deseja adicionar?"));
      break;
    case "2":
      let ultimacarta = baralho.pop();
      if (!ultimacarta) {
        alert("Não a cartas no seu baralho");
      } else {
        alert("A carta " + ultimacarta + " foi retirada do baralho");
      }
      break;
    default:
      if (opcao !== "3") {
        alert("Opção invalida");
        console.error("Opção invalida");
      }
      break;
  }
} while (opcao !== "3");
