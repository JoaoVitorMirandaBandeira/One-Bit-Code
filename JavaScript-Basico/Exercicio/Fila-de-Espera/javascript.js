let fila = [];
let opcao = "";

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    paciente += i + 1 + "º - " + fila[i] + "\n";
  }
  opcao = prompt(
    "Bom dia essa e a nossa fila de espera\n" +
      paciente +
      "\nEscolha uma ação : \n1-Consultar paciente \n2-Adicionar paciente\n3-Fechar programa"
  );
  switch (opcao) {
    case "1":
      let pacienteConsultado = fila.shift();
      if (!pacienteConsultado) {
        alert("Não a pacientes na fila");
      } else {
        alert(pacienteConsultado + " Paciente consultado");
      }
      break;
    case "2":
      fila.push(prompt("Digite o nome do paciente"));
      break;
    default:
      if (opcao !== "3") {
        alert("Opção invalida");
        console.error("Opção invalida");
      }
      break;
  }
} while (opcao !== "3");
