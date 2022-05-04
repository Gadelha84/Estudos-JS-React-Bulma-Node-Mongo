let spaceshipName = prompt("Informe o nome da nave:");
let denyChar = prompt("Informe o caractere proibido:");
let newSpaceship = "";

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == denyChar) {
        break;
    } else {
        newSpaceship += spaceshipName[i];
    }
    }

    alert("O nome da nave oculta é: " + newSpaceship);
