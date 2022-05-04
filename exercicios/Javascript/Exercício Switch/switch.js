let lightYearDistance = prompt("Informe a distancia em anos-luz: ");

let choice = prompt("Escolha a unidade de conversão: \n1 - Parsec (pc) \n2 - Unidade astronômica (AU) \n3 - Quilômetros (km)");

switch (choice) {
    case "1":
        let parsec = lightYearDistance * 0.306601
        alert("A distancia informa " + lightYearDistance + " convertida em Parsec é: " + parsec + " anos-luz")
    break;
    case "2":
        let astronomicUnity = lightYearDistance * 63241.1;
        alert("A distancia informa " + lightYearDistance + " convertida em Unidade Astronômica é: " + astronomicUnity + " anos-luz")
    break;
    case "3":
        let kilometers= lightYearDistance * 9.5 * Math.pow(10, 12);
        alert("A distancia informa " + lightYearDistance + " convertida em Parsec é: " + kilometers + " anos-luz")
    break;
    default:
        alert("Distancia em anos-luz: " + lightYearDistance + " Unidade não identificada: Conversão fora do escopo")
}

