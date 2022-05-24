class Spaceship {
    constructor(name, crewQuantity,) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }
    speedUP(acceleration) {
        this.currentVelocity += (acceleration * (1 - 0.17))
    }
}

class Battleship extends Spaceship {
    constructor(name, crewQuantity, quantityofWeapons) {
        super(name, crewQuantity)
        this.quantityofWeapons = quantityofWeapons
    }
}
class Transport extends Spaceship {
    constructor(name, crewQuantity, quantityofplaces) {
        super(name, crewQuantity)
        this.quantityofplaces = quantityofplaces
    }
}

function menu() {
    let optionName = prompt("Bem Vindo Piloto. Informe por gentileza o Nome da Nave:")
    let optionCrewQuantity = prompt("Bem Vindo Piloto. Informe por gentileza a quantidade de tripulantes:")
    let optiontype = prompt("Bem Vindo Piloto. Informe por gentileza o tipo da Nave:\n" + "1. Batalha!\n" + "2. Transporte!")
    switch (optiontype) {
        case "1":
            var quantityofWeapons = prompt("Quantas armas sua nave possui?")
            var battleShip = new Battleship(optionName, optionCrewQuantity, quantityofWeapons)
            break
        case "2":
            var quantityofplaces = prompt("Quantos lugares sua nave possui?")
            var transportShip = new Transport(optionName, optionCrewQuantity, quantityofplaces)
            break
        default:
            while (optiontype == "3") {
                alert("opção inválida")
                optiontype = prompt("Bem Vindo Piloto. Informe por gentileza o tipo da Nave:\n" + "1. Batalha!\n" + "2. Transporte!")
            }
    }
    function menu2() {
        menu2Options = prompt("Piloto, informe o que deseja\n " + "1. Acelerar a nave!\n" + "2.Trocar a nave!\n" + "3.Imprimir e Sair")
        switch (menu2Options) {
            case "1":
                if (optiontype == "1") {
                    let acceleration = prompt("Quanto deseja acelerar?")
                    battleShip.speedUP(acceleration)
                } else if (optiontype == "2") {
                    let acceleration = prompt("Quanto deseja acelerar?")
                    transportShip.speedUP(acceleration)
                }
                menu2()
                break
            case "2":
                let certeza = prompt("Piloto, tem certeza que deseja trocar de nave?\n" + "1.Sim\n" + "2.Não")
                if (certeza == "1") {
                    menu()
                } else {
                    menu2()
                }
                break
            case "3":
                if (optiontype == "1") {
                    console.log(battleShip)
                } else if (optiontype == "2") {
                    console.log(transportShip)
                }
                break
            default:
                alert("Opção Inválida!")
                menu2()
        }
    }
    menu2()
}
menu()