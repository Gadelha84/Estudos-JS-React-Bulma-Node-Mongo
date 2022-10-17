const spaceships = []

function addSpaceship (name: string, pilot: string, crewLimit: number) {
    const spaceship = {
    name,
    pilot,
    crewLimit: [],
    inMission: false
    }

    spaceship.push(spaceship)

    alert(`A nave ${spaceship.name} foi registrada.`)
}

function findSpaceship(name: string){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: string,
        crew: string [],
        inMission: boolean
    }

    spaceship = spaceship.find(ship => ship.name === name)

    return spaceship
}