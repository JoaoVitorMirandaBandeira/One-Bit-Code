let money = parseFloat(prompt("quanto de dinheiro Disponivel vc tem?"));
let opcao = "";
do {
  opcao = prompt(
    "Você tem disponivel R$" +
      money +
      "\n-1-Adicionar Dinheiro" +
      "\n-2-Retirar dineiro" +
      "\n-3-Sair"
  );
  if (opcao === "1") {
    let adicionar = parseFloat(prompt("Quanto o senhor deseja adicionar"));
    money += adicionar;
    alert("Novo saldo de RR$" + money);
  } else if (opcao === "2") {
    let retirar = parseFloat(prompt("Quanto o senhor deseja retirar"));
    money -= retirar;
    alert("Novo saldo de RR$" + money);
  }
} while (opcao !== "3");
