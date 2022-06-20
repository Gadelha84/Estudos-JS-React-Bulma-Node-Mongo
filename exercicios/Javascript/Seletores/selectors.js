function showInfo(){
    let person = document.querySelector("input[name = 'name']").value;
    let primaryColor = document.querySelector("select[name = 'color'] option:checked").textContent;
    let likeProgramming = document.querySelector("input[name= 'like-programming']:checked").value;
    let programmingKnowledge = document.querySelectorAll("input[name= 'developer-options']:checked");
    let optionsValue = []; //array para armazenar opções de "programmingKnowledge";
    programmingKnowledge.forEach(element => {optionsValue.push(element.value)}) //pega o valor de cada chekedbox de OptionsValue
    let optionsChecked = optionsValue.join(", "); //junta os elementos do array separando por ","
    alert("Nome: " +person+ "\nCor Primária: " +primaryColor+ "\nGosta de programar?: " +likeProgramming+ "\nConhecimentos em programação: " +optionsChecked);
}