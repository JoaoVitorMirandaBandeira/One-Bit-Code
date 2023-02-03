let primeiroNome = prompt("Por favor digite seu nome :");
let sobrenome = prompt("Por favor digite seu sobrenome :");
let campoEstudo = prompt("Oque voce estuda :");
let anoNascimento = prompt("Que ano vc nasceu");
let idade = 2022 - parseFloat(anoNascimento);

alert(
  "Cadastro concluido com sucesso\n" +
    "Nome : " +
    primeiroNome +
    " " +
    sobrenome +
    "\nArea de estudo : " +
    campoEstudo +
    "\nIdade : " +
    idade
);
