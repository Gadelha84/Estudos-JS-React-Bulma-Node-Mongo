//testes de Array utilizando laço

/*let cores = ["Branco", "Preto", "Vermelho"];
console.log(cores);

for(let pos = 0; pos < cores.length; pos++) {
    console.log(cores[pos]);


for(let pos in cores){
    console.log(cores[pos]);
}
*/

//Miniapp para conversão de graus
/* function Fahrenheit() {
    let F = parseInt(prompt("Informe a temperatura em Fahrenheit: "));
    C = (F - 32) * 5 / 9;
    alert("A tempera em Celsius é: " +C);
}

function Celsius() {
    let C = parseInt(prompt("Informe a temperatura em Celsius: "));
    F = (C * (9/5)) + 32;
    alert("A tempera em Fahrenheit é: " +F);
}

function quit(){
    alert("Clique em OK para sair");
}

choiceOption = parseInt(prompt("Informe o tipo de conversão que deseja: \n1 - Fahrenheit \n2 - Celsius \n3 - Sair"));
if(choiceOption == 1 || choiceOption == 2){
    switch(choiceOption){
        case 1:
            Fahrenheit();
            break;
        case 2:
            Celsius();
            break;
    }
}else {
    quit();
} */


function media(md){
    function notes(note1, note2, note3){
        return (note1 + note2 + note3) / md; 
    }
    return notes;
}

const degree = media(3);

console.log(degree(9, 9, 9));
