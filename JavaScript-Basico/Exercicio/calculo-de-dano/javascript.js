//Personagem 1
let personAtac = prompt("Personagem de ataque :");
let atac = prompt("Qual poder de ataque do personagem ?");
atac = parseFloat(atac);

//Personagem 2
let personDef = prompt("Personagem defesa :");
let lifeDef = prompt("Quantos pontes de vida ele tem ?");
lifeDef = parseFloat(lifeDef);
let defense = prompt("Quantos pontos de defesa ele tem ?");
defense = parseFloat(defense);
let shield = confirm("Seu personagem possui escudo ?");

let damage;
if (atac > defense && shield === false) {
  damage = atac - defense;
  lifeDef -= damage;
} else if (atac > defense && shield === true) {
  damage = (atac - defense) / 2;
  lifeDef -= damage;
} else {
  damage = 0;
  lifeDef -= damage;
}

alert(
  "Personagem Ataque\n" +
    "Nome : " +
    personAtac +
    "\nAtaque : " +
    atac +
    "\nDano calsado : " +
    damage +
    "\nPersonagem Defesa" +
    "\nNome : " +
    personDef +
    "\nVida : " +
    lifeDef +
    "\nDefesa : " +
    defense +
    "\nPossui escudo : " +
    shield
);
