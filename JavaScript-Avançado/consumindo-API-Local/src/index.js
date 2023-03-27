import { Transaction } from "./transaction.js";

const form = document.querySelector(".formPrincipal");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const transaction = new Transaction(
    document.querySelector("#name").value,
    document.querySelector("#value").value
  );
  console.log(transaction);
  const bodyPost = {
    name: transaction.name,
    value: "R$" + transaction.value,
    date: transaction.date,
  };

  const request = await fetch("http://localhost:3000/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPost),
  });
  const transactionJson = await request.json();
  form.reset();
  formatTransaction(transactionJson);
});

async function dateTransaction() {
  const transaction = await fetch("http://localhost:3000/transaction").then(
    (resp) => resp.json()
  );
  transaction.forEach(formatTransaction);
  console.table(transaction);
}
dateTransaction();

function formatTransaction(transaction) {
  const div = createTag("div", `element-${transaction.id}`);
  div.classList.add("element");

  const nome = createTag("p", `name-${transaction.id}`);
  nome.innerText = `Nome: ${transaction.name}`;

  const value = createTag("p", `value-${transaction.id}`);
  value.innerText = `Valor: ${transaction.value}`;

  const date = createTag("p", `date-${transaction.id}`);
  date.innerText = `Data: ${transaction.date}`;

  const edit = createImg("img/lapis.jpg", "edit-img", transaction.id);
  const lixeira = createImg("img/Lixeira.png", `delete-img`, transaction.id);

  const btnEdit = createTag("button", "edit", transaction.id);
  const btnDelete = createTag("button", "delete", transaction.id);

  btnEdit.appendChild(edit);
  btnDelete.appendChild(lixeira);

  const divText = createTag("div", "texto");
  const divIcons = createTag("div", "iconsDiv");

  divText.append(nome, value, date);
  divIcons.append(btnEdit, btnDelete);
  div.append(divText, divIcons);
  document.querySelector(".transaction").appendChild(div);
  adcionarEvento();
}

function createImg(src, classe, id) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add(`icons`);
  img.classList.add(`${classe}`);
  img.dataset.value = id;
  return img;
}

function createTag(tag, classe, dataset) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  if (dataset) {
    elemento.dataset.value = dataset;
  }
  return elemento;
}

function adcionarEvento() {
  const btnEdit = document.querySelectorAll(".edit");
  const btnDelete = document.querySelectorAll(".delete");
  btnEdit.forEach((keyEdit) => {
    keyEdit.addEventListener("click", editTransaction);
  });
  btnDelete.forEach((keyEdit) => {
    keyEdit.addEventListener("click", deleteTransaction);
  });
}

async function editTransaction(event) {
  const button = event.target;
  const id = button.dataset.value;
  document.querySelector("#idRequest").value = "";
  document.querySelector("#idRequest").value = id;
  popup.classList.add("active");
}

const popup = document.querySelector(".popup");

const formPopup = document.querySelector(".formPopup");

formPopup.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const id = document.querySelector("#idRequest").value;
  const nome = document.querySelector("#namePopup").value;
  const valor = document.querySelector("#valuePopup").value;
  const bodyPut = {
    name: nome,
    value: "R$" + valor,
    date: setDate(),
  };
  const request = await fetch(`http://localhost:3000/transaction/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPut),
  });
  const transactionJson = await request.json();
  formPopup.reset();
  popup.classList.remove("active");
  location.reload();
});

document.querySelector(".fechar").addEventListener("click", () => {
  popup.classList.remove("active");
});

function setDate() {
  let date = new Date();
  date = date.toLocaleDateString();
  return date;
}

async function deleteTransaction(ev) {
  const button = ev.target;
  const id = button.dataset.value;
  await fetch(`http://localhost:3000/transaction/${id}`, {
    method: "DELETE",
  });
  document.querySelector(`.element-${id}`).remove();
}
