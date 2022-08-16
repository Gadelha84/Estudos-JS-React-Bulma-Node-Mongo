const fs = require('fs');

//Criando arquivo
fs.writeFile('test.txt', 'Olá NodeJS', err => {
    console.log(err);
})

//Adicionando conteúdo
fs.appendFile('test.txt', 'conteúdo adicionado', err => {
    console.log(err)
})

//Renomeando arquivos
fs.rename('test.txt', 'test2.txt', err => {
    console.log(err);
})

//Excluindo arquivos
fs.unlink('text2.txt', err => {
    console.log(err);
})