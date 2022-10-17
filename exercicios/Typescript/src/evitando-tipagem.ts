function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {

}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })

sendSpaceship({ pilot: 'Luke' })


//Any não é recomendado pois foge dos padrões Typescript
let input: any //unknow

input = 'Test'
input = 20
input = []

let text: string

