function save(){
    event.preventDefault();
    let person = document.querySelector("input[name= 'name']").value;
    let program = document.querySelector("select[name= 'programming-lang']").value;
    alert("Nome: " +person+ "\nProgram: " +program);
  }