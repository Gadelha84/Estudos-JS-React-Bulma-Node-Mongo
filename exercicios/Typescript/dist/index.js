function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velodade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Informe o nome da nave a ser enviada: ');
var captainName = prompt('Informe o nome do capitão da nave: ');
var currentShip = sendSpaceship(spaceshipName, captainName);
var speed = Number(prompt('Insira a velocidade para qual deseja acelerar: '));
accelerate(speed, currentShip);
