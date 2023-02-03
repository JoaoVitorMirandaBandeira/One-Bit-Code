function addJogador() {
  let posicao = document.getElementById("posicao").value;
  let nome = document.getElementById("nome").value;
  let numero = document.getElementById("numero").value;

  let confrm = confirm("Adicionar o  Jogador " + nome);

  if (confrm) {
    const list = document.getElementById("time");
    const li = document.createElement("li");
    li.id = "jogador-" + numero;
    li.innerText = posicao + " - " + nome + " - " + numero;
    list.appendChild(li);
  }

  document.getElementById("posicao").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("numero").value = "";
}

function removeJogador() {
  let numero = document.getElementById("numeroRemove").value;

  let confir = confirm("Deseja remover o jogador ?");

  if (confir) {
    let list = document.getElementById("time");
    let liRemove = document.getElementById("jogador-" + numero);
    list.removeChild(liRemove);
  }

  document.getElementById("numeroRemove").value = "";
}
