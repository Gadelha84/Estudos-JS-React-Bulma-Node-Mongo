//Array com naves, tripulação, engate e abertura de portas respectivamente
let spacebase = [
    ["Intruder", 10, true, true],
    ["Starshield", 8, false, false],
    ["Crusader", 15, false, false],
    ["Buster", 13, true, true]
];

let optionMenu = "";
const display = "1";
const createShip = "2";
const exit = "3";

//função display de naves
function showShips() {
    console.log(spacebase);
}

//função para cadastrar novas naves
let createNewShip = function(){
    newSpaceship = prompt("Informe o nome da nova nave: ");
    newCrewQuantity = prompt("Informe a quantidade de tripulantes: ");
    imediateHitch = confirm("Deseja realizar o engate imediato?");
    spacebase.push([newSpaceship, newCrewQuantity, imediateHitch]);
    console.log(spacebase);
}

//Estrutura de menus
while (optionMenu != exit) {
    optionMenu = prompt("1- Informações das naves" + "\n2- Cadastrar nova nave" + "\n3- Sair");
    switch (optionMenu) {
        case display:
            showShips();
            break;
        case createShip:
            createNewShip();
            break;
    }
}