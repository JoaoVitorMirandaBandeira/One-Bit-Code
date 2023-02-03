let car1 = prompt("Qual nome do eu carro?");
let speedCar1 = prompt("Velocidade do seu carro ?");
let car2 = prompt("Qual nome do seu carro ?");
let speedCar2 = prompt("Velocidade do seu carro ?");

let finish =
  speedCar1 > speedCar2
    ? "O carro " + car1 + " e mais rapido"
    : speedCar2 > speedCar1
    ? "O carro " + car2 + " e mais rapido"
    : "Os dois carros tem a mesma velocidade";

alert(finish);
