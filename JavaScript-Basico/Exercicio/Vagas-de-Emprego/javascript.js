let opcao = "0";
let vagas = []; //{nome,descrição,data,candidatos}
do {
  //Menu
  opcao = prompt(
    "Bem vindo ao Sistema de vagas\n" +
      "1-Listar vagas Disponiveis\n" +
      "2-Criar uma nova vaga\n" +
      "3-Visualizar uma vaga\n" +
      "4-Inscrver um candidato\n" +
      "5-Excluir uma vaga\n" +
      "6-Sair"
  );
  //Menu

  switch (opcao) {
    case "1":
      //Listar vagas
      //{indice,nome,candidatos}
      if (vagas.length > 0) {
        alert("Vagas disponiveis : \n" + listarVagas(vagas));
      } else {
        alert("Não a vagas disponiveis");
      }
      //Listar vagas
      break;
    case "2":
      alert("Criando nova vaga, Por favor infome os dados da vaga");
      addVagas();
      break;
    //Criar vaga
    case "3":
      //Visualizar vaga
      //{nome,descrição,data,candidatos}
      if (vagas.length > 0) {
        let indiceVaga = prompt("Informa o indice da vaga por favor!");
        indiceVaga -= 1;
        console.log(indiceVaga);
        if (vagas[indiceVaga]) {
          visualizarVaga(indiceVaga);
        } else {
          alert("Não existe essa vaga");
        }
      } else {
        alert("Não a vagas disponiveis");
      }
      break;
    //Visualizar vaga
    case "4":
      //Adicionar candidato na vaga
      let nome = prompt("informe o nome do candidato ");
      let indice = prompt("Indice da vaga:");
      indice -= 1;
      if (vagas[indice]) {
        visualizarVaga(indice);
        addCandidato(indice, nome);
      } else {
        alert("Não existe essa vaga");
      }
      break;
    //Adicionar candidato na vaga
    case "5":
      //Excluir vaga
      if (vagas.length > 0) {
        let indic = prompt("Informe o indice da vaga que deseja deletar");
        indic -= 1;
        if (vagas[indic]) {
          deletVaga(indic);
        } else {
          alert("Não existe essa vaga");
        }
      } else {
        alert("Não a vagas disponiveis");
      }
      break;
    //Excluir vaga
    case "6":
      alert("Saindo.....");
      break;
    default:
      break;
  }
} while (opcao !== "6");

function listarVagas(vagas) {
  let listar = "";
  vagas.forEach((element, indice) => {
    listar +=
      indice +
      1 +
      "º " +
      element.nome +
      " - Inscritos : " +
      element.candidatos.length +
      "\n";
  });
  return listar;
}
function addVagas() {
  let vaga = {};
  vaga.nome = prompt("Nome da vaga");
  vaga.descricao = prompt("Descrição da vaga");
  vaga.data = prompt("Data limite da vaga: dd/mm/aaaa");
  vaga.candidatos = [];
  let salvar = confirm("Deseja salvar a vaga ?");
  if (salvar) {
    vagas.push(vaga);
    alert("Vaga salva com Sucesso!");
  } else {
    alert("Vaga excluida!");
  }
}
function visualizarVaga(indice) {
  let vaga = vagas[indice];
  let candidato = "";
  vaga.candidatos.forEach((element) => {
    candidato += element + "\n";
  });
  alert(
    "Informações da vaga\n" +
      "Nome : " +
      vaga.nome +
      "\nDescrição : " +
      vaga.descricao +
      "\nData : " +
      vaga.data +
      "\nCandidatos : " +
      vaga.candidatos.length +
      "\n Nome Candidatos : \n" +
      candidato
  );
}
function addCandidato(indice, nome) {
  let confir = confirm("Tem certeza que deseja adicionar o candidato!");
  if (confir) {
    vagas[indice].candidatos.push(nome);
    alert("Candidato adicionado a vaga com sucesso!");
  } else {
    alert("Ação cancelada");
  }
}
function deletVaga(indice) {
  visualizarVaga(indice);
  let confirmDelete = confirm("Deseja mesmo excluir essa vaga ?");
  if (confirmDelete) {
    vagas.splice(indice, 1);
    alert("Vaga excluida com sucesso");
  } else {
    alert("Ação cancelada com sucesso");
  }
}
