class Property {
    constructor(kind, area, rentSituation) {
        this.kind = kind;
        this.area = area;
        this.rentSituation = rentSituation;
    }
}

function createImmobile() {
    const kind = document.querySelector("select[name= 'kind']").value;
    const area = document.querySelector("input[name='area']").value;
    const rentSituation = document.querySelector("select[name= 'rentSituation']").value;

    const newProperty = new Property(kind, area, rentSituation);

    let divElement = document.createElement("div"); //Cria nova div para o elemento que será impresso
    let element = `<fieldset><legend>Imóvel:</legend><p>Imóvel: ${newProperty.kind} - Area: ${newProperty.area} - Situação: ${newProperty.rentSituation}</fieldset>`;

    let buttonDelete = document.createElement("button")

    buttonDelete.innerHTML = "Remover"

    buttonDelete.onclick = () => {
        let parent = buttonDelete.parentNode
        parent.remove()
    }

    let divArea = document.querySelector("#list-properties")
    divArea.appendChild(divElement)
    divElement.innerHTML = element
    divElement.appendChild(buttonDelete)

    if(newProperty.rentSituation == "Alugado") {
        divElement.style.backgroundColor = "red"
        divElement.style.color = "white"
    } else {
        divElement.style.backgroundColor = "green"
        divElement.style.color = "white"
    }
}