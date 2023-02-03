const cadastrar = document.getElementById("cadastrar");
const addTecnologia = document.querySelector("#addTec");
const ul = document.querySelector("#tecnologia");
const form = document.getElementById("devForm");
let desenvolvedor = [];
let contador = 0;

function createInput(id, name, value, type, placerolder = "") {
  //type name id placerolder value
  let input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.type = type;
  input.placeholder = placerolder;
  input.name = name;
  return input;
}
function createLabel(id, idfor, text) {
  let label = document.createElement("label");
  label.id = id;
  label.htmlFor = idfor;
  label.innerText = text;
  return label;
}
function buttonRemove(id, type) {
  let button = document.createElement("button");
  button.type = type;
  button.id = id;
  button.innerText = "Remover";
  button.addEventListener("click", function () {
    ul.removeChild(li.id);
  });
}

addTecnologia.addEventListener("click", function (ev) {
  let newTec = document.createElement("li");
  newTec.className = "tecs";
  newTec.id = contador;

  let labelName = createLabel(
    "label-" + contador,
    "label-" + contador,
    "Tecnologia"
  );

  let inputName = createInput("input-" + contador, "tecname", "", "text");
  let id1 = contador + ".1";
  let id2 = contador + ".2";
  let id3 = contador + ".3";
  let inputRadio1 = createInput(
    "radio-" + id1,
    "radio-" + contador,
    "0-2 anos",
    "radio",
    "0-2 anos"
  );
  let labelRadio1 = createLabel(contador, "radio-" + id1, "0-2 anos");

  let inputRadio2 = createInput(
    "radio-" + id2,
    "radio-" + contador,
    "3-4 anos",
    "radio",
    "3-4 anos"
  );
  let labelRadio2 = createLabel(contador, "radio-" + id2, "3-4 anos");

  let inputRadio3 = createInput(
    "radio-" + id3,
    "radio-" + contador,
    "5+ anos",
    "radio",
    "5+ anos"
  );
  let labelRadio3 = createLabel(contador, "radio-" + id3, "5+ anos");

  let button = document.createElement("button");
  button.type = "button";
  button.id = contador;
  button.innerText = "Remover";
  button.addEventListener("click", function () {
    ul.removeChild(newTec);
  });
  newTec.append(
    labelName,
    inputName,
    inputRadio1,
    labelRadio1,
    inputRadio2,
    labelRadio2,
    inputRadio3,
    labelRadio3,
    button
  );
  ul.appendChild(newTec);
  contador++;
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nameDev = document.querySelector("#nameDev").value;
  const norma = document.querySelectorAll(".tecs");
  let tecnologias = [];
  norma.forEach(function (row) {
    let nameTec = document.querySelector("#input-" + row.id).value;
    let techExp = document.querySelectorAll('input[type="radio"]:checked')[row.id].value;

    tecnologias.push({ nome: nameTec, experiencia: techExp });
  });
  let newdev = { nome: nameDev, experiencia: tecnologias };
  desenvolvedor.push(newdev);
  document.querySelector("#nameDev").value = ''
  norma.forEach(function (row) {
    row.remove()
  })
  contador = 0
});
