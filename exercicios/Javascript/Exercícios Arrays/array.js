const shipsEngatadas = [
    ["Fenix", 8, true],   // plataforma 1
    ["Golias", 8, true],  // plataforma 2   
    ["Helmet", 5, false], // plataforma 3
    ["Elemental", 3, true], // platafoma 4 
    ["Darwin", 15, false] // plataforma 5
];
 
// Filtrar o nome da nave que tem mais de 9 tripulantes

let filtro9  = shipsEngatadas.filter(function (elemento){
    if(elemento[1] > 9){
        return elemento
   } 
})
 let nave = filtro9[0][0];
console.log(nave)
// Informar o numero da plataforma em que está a primeira nave que ainda está com o engate pendente

let plataformN = shipsEngatadas.findIndex(elemento =>{return elemento[2] == false})
console.log(plataformN)

// Destacar os Nomes da Naves colocando-as em caixa alta e exibindo

let upNames = shipsEngatadas.map(function (elemento){
    elemento.unshift()
    let rships = elemento.slice(0,1).join()
    return rships.toUpperCase()
})
    
console.log(upNames)

// exibir um alerta com todas essas informações.

alert ("Nave com mais de 9 tripulantes: " + nave +"\nO numero da plataforma : " + plataformN + "\nNomes das Naves: " + upNames)

