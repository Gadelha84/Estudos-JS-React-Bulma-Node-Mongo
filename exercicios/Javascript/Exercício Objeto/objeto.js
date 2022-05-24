let spaceship = {
    name: "",
    type: "",
    maxVelocity: 70,
    currentVelocity: 0,
};

spaceship.name = prompt("Qual o nome da nave?");
spaceship.type = prompt("Qual o tipo da nave?");

let optionMenu = "";
const speedUp = "1";
const speedDown = "2";
const exit = "3";

function acelerate() {
    let velocity = prompt("Quanto deseja acelerar?");
    spaceship.currentVelocity = parseInt(velocity) + spaceship.currentVelocity;

    checkMaxVelocity();
}

function checkMaxVelocity() {
    if (spaceship.currentVelocity > spaceship.maxVelocity) {
        alert(
            "Velocidade máxima: " + spaceship.maxVelocity + "km/s" + "\nVelocidade permitida: " + spaceship.maxVelocity + "km/s"
        );
        spaceship.currentVelocity = spaceship.maxVelocity;
    }
}

function stop() {
    let stopVelocity = alert(
        "A nave irá parar" +
            "\nNome da nave: " +
            spaceship.name +
            "\nTipo da nave: " +
            spaceship.type +
            "\nVelocidade: " +
            spaceship.currentVelocity +
            "km/s"
    );
}

while (optionMenu != exit) {
    optionMenu = prompt("1- Para acelerar a nave" + "\n2- Parar a nave" + "\n3- Sair do menu");
    switch (optionMenu) {
        case speedUp:
            acelerate();
            break;
        case speedDown:
            stop();
            break;
    }
}