let imoveis = [];
let opcao = "";
let salvar = {};

do {
  salvar = {};
  opcao = prompt(
    "Bem vindo a Imobiliario:\n" +
      "Imoveis disponiveis : " +
      imoveis.length +
      "\nMenu: \n1-Salvar imavel\n2-Exibir todos imoveis\n3-Sair"
  );
  switch (opcao) {
    case "1":
      salvar.proprietario = prompt("Nome do Proprietario:");
      salvar.quartos = prompt("Quantidade de quartos:");
      salvar.banheiros = prompt("Quantidade de banheiros");
      salvar.garagem = confirm("Possui garagem ?");
      imoveis.push(salvar);
      break;
    case "2":
      let exibir = "";
      for (let i = 0; i < imoveis.length; i++) {
        let garagem = imoveis[i].garagem === true ? "Sim" : "Não";
        exibir +=
          i +
          1 +
          "º Imovel\n   Proprietario : " +
          imoveis[i].proprietario +
          "\n   Quartos : " +
          imoveis[i].quartos +
          "\n   Banheiros : " +
          imoveis[i].banheiros +
          "\n   Garagem : " +
          garagem +
          "\n";
        garagem = "";
      }
      alert("Imoveis:\n" + exibir);
      break;
    default:
      if (opcao !== "3") {
        alert("Opção invalida");
        console.error("Opção invalida");
      }
      break;
  }
} while (opcao !== "3");
