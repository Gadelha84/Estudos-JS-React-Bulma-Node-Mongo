let pilotName = prompt("Informe o nome do piloto: ");
let velocity = 0;
let acceleration = prompt("A velocidade atual da nave é: " + velocity + "\n Qual a velocidade de aceleração?");
let conf = confirm("A nave está acelerando à velocidade: " + acceleration + "\n Confirma a aceleração?");

//Aletaração de variável caso piloto confirme velocidade informada
(conf == true) ? velocity = acceleration : velocity = velocity;

//Condicional baseada na velocidade escolhida
if (velocity < 0) {
    alert("A nave está parada. \nConsidere partir e aumentar a velocidade");
}else if (velocity < 40) {
    alert("Você está devagar. Podemos aumentar a velocidade");
}else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter");
}else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir");
}else {
    alert("Velocidade perigosa. Controle automático forçado");
}

alert(pilotName + " sua velocidade atual é: " + velocity);

