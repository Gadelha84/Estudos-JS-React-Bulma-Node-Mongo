let spaceship = prompt("Informe o nome da nave:");
let alteredchar = prompt("Qual caracter gostaria de alterar?");
let substitutechar = prompt("Por qual caractere deseja substituir?");
let newSpaceship = "";

for (let i = 0; i < spaceship.length; i++){
    if (spaceship[i] == alteredchar){
        newSpaceship += substitutechar;
    }else {
        newSpaceship += spaceship[i];
    }
}

alert("O nome da nave foi alterado para " +newSpaceship);
