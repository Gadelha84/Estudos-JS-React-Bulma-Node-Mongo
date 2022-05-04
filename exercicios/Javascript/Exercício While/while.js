let spaceshipName = prompt("Informe o nome da nave: ");
let warp = 0;
let warpSpace = prompt("Deseja entrar em dobra espacial: \n1 - Sim \n2 - Não");

while (warpSpace == "1" ){
    warp += 1;
    warpSpace = prompt("Deseja realizar dobra novamente: \n1 - Sim \n2 - Não");
}

alert("A nave " +spaceshipName+ " realizou " +warp+ " dobra(s)");