const process = require('process');

process.stdin.on('data', (texto) => {
    process.stdout.write(`Texto do usuário: ${texto}`);
    process.exit();
});