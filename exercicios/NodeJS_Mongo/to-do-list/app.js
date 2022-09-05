const express = require('express');
const checkListRouter = require('./src/routes/checklist');
require('./config/database');

const app = express();
app.use(express.json());

//Rotas em checkListRouter, são devrivadas da rota anterior, checklist
app.use('/checklist', checkListRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado');
})