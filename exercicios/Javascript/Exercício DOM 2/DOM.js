class House {
    constructor(number, district, city, areaOfTheHouse) {
        this.number = number
        this.district = district
        this.city = city
        this.areaOfTheHouse = areaOfTheHouse
    }
}

function addNewHouse() {
    const number = document.getElementById("number")
    const district = document.getElementById("district")
    const city = document.getElementById("city")
    const areaOfTheHouse = document.getElementById("areaOfTheHouse")

    const newHouse = new House(number.value, district.value, city.value, areaOfTheHouse.value)
    let divArea = document.getElementById("list-houses")
    let divElement = document.createElement("div")
    let element = `<fieldset><legend>Cadastro Impresso</legend><p>Número da casa: ${newHouse.number} - Bairro: ${newHouse.district} - Cidade: ${newHouse.city} - Área da casa: ${newHouse.areaOfTheHouse}</p></fieldset>`
    let buttonDelete = document.createElement("button")
    buttonDelete.innerHTML = "Remover"

    buttonDelete.onclick = () => {
        let parent = buttonDelete.parentNode
        parent.remove()
    }

    divElement.innerHTML = element
    // Adicionando o atributo "class"
    divElement.setAttribute("class", "test")
    document.body.appendChild(divArea)
    divArea.appendChild(divElement)
    divElement.appendChild(buttonDelete)
}

function deleteHouses() {
    let divArea = document.getElementById("list-houses")

    document.body.removeChild(divArea)

    let newDivArea = document.createElement("div")
    newDivArea.setAttribute("id", "list-houses")

    document.body.appendChild(newDivArea)
}