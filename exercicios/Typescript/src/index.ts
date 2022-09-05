function sendSpaceship (name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert (`A nave ${spaceship.name} comandada pelo ${spaceship.captain} foi enviada em uma missão.`)

    return spaceship;
}

function accelerate (targetSpeed:number, spaceship: {name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velodade da ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed){
        alert (`Aumentando a velocidade da ${spaceship.name}...`)
    } else {
        alert (`Mantendo a velocidade da ${spaceship.name}...`)
    }
}

const spaceshipName = prompt('Informe o nome da nave a ser enviada: ')
const captainName = prompt('Informe o nome do capitão da nave: ')

const currentShip = sendSpaceship(spaceshipName, captainName);

const speed = Number(prompt('Insira a velocidade para qual deseja acelerar: '))

accelerate(speed, currentShip)