let transection = [];
//Bloco do envio do formulario
const form = document.querySelector("form");
form.addEventListener("submit", saveTansaction);

async function saveTansaction(ev) {
  ev.preventDefault();
  const id = document.querySelector("#id").value;
  if (id) {
    await editTransaction();
  } else {
    await newTransaction();
  }

  form.reset();
  calculateAmount();
}

//Nova transação

async function newTransaction() {
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);

  const request = await fetch("http://localhost:3000/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, amount }),
  });

  const object = await request.json();
  formaterTransection(object);
  transection.push(object);
}

//Editar uma transação

async function editTransaction() {
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);
  const id = document.querySelector("#id").value;

  const request = await fetch(`http://localhost:3000/transaction/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, amount }),
  });

  const object = await request.json();
  const indexRemove = transection.findIndex((t) => t.id == id);
  transection.splice(indexRemove, 1, object);
  document.querySelector(`#transaction-${id}`).remove();
  formaterTransection(object);
}

//Bloco de codigo caregamento da pagina
document.addEventListener("DOMContentLoaded", setup);
async function setup() {
  const request = await getTransection();
  transection.push(...request);
  transection.forEach(formaterTransection);
  calculateAmount();
}

//Fução GET
async function getTransection() {
  return await fetch("http://localhost:3000/transaction").then((resp) =>
    resp.json()
  );
}

//Funçoes de formatação
function formaterTransection(transaction) {
  const div = divTransaction(transaction.id);
  const amount = formaterAmount(transaction.amount);
  const name = nameFormater(transaction.name);
  const buttonEdit = createButtonEdit(transaction);
  const buttonDelete = createButtonDelete(transaction.id);

  div.append(name, amount, buttonEdit, buttonDelete);
  document.querySelector("#transaction").appendChild(div);
}

function formaterAmount(amount) {
  const span = document.createElement("span");
  span.classList.add("amount-transaction");
  const formater = Intl.NumberFormat("pt-br", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  const amoutFormater = formater.format(amount);
  if (amount > 0) {
    span.textContent = `${amoutFormater} C`;
    span.classList.add("credit");
  } else {
    span.textContent = `${amoutFormater} D`;
    span.classList.add("debit");
  }
  return span;
}

function divTransaction(id) {
  const div = document.createElement("div");
  div.classList.add("transaction");
  div.id = `transaction-${id}`;
  return div;
}

function nameFormater(name) {
  const span = document.createElement("span");
  span.classList.add("transaction-name");
  span.innerText = name;
  return span;
}

//Calcular o saldo Total
function calculateAmount() {
  console.log(transection);
  console.log("Total");
  const amount = transection.reduce(
    (sum, transection) => sum + transection.amount,
    0
  );
  const formater = Intl.NumberFormat("pt-br", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  console.log(amount);
  document.querySelector("#balance").textContent = formater.format(amount);
}

//Criar botão de editar

function createButtonEdit(transaction) {
  const button = document.createElement("button");
  button.classList.add("btnEdit", `btn-${transaction.id}`);
  button.textContent = "Editar";
  button.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id;
    document.querySelector("#name").value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  });
  return button;
}

//Criar botão de remover

function createButtonDelete(id) {
  const button = document.createElement("button");
  button.classList.add("btnDelete", `btnDelete-${id}`);
  button.textContent = "Excluir";
  button.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transaction/${id}`, {
      method: "DELETE",
    });
    const indexRemove = transection.findIndex((t) => t.id == id);
    transection.splice(indexRemove, 1);
    document.querySelector(`#transaction-${id}`).remove();
    calculateAmount();
  });
  return button;
}
