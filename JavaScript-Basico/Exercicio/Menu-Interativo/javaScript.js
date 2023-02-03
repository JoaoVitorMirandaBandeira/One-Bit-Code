let opcoes;

do {
  opcoes = prompt(
    "Por favor escolha uma das opções abaixo:\n-1-Continuar\n-2-Permanecer\n-3-Proceguir\n-4-Ficar\n-5-Sair"
  );
  if (opcoes != "5") {
    alert("Obrigado por continuar conosco");
  }
} while (opcoes != "5");

alert("O programa esta sendo encerrado");
