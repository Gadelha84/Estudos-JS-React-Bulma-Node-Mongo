function verifyenablement(){
    let verify = document.querySelector("select").value;
    if(verify == "disabled"){
      document.querySelector("input[name= 'some-text']").disabled = true;
      let pElement = document.getElementById("message");
      pElement.innerText = "Dasabilitado";
      pElement.style.color = "white";
      pElement.style.backgroundColor = "red";
    }else{
      document.querySelector("input[name= 'some-text']").disabled = false;
      let pElement = document.getElementById("message");
      pElement.innerText = "";
      pElement.style.color = "black";
      pElement.style.backgroundColor = "transparent";
    }
  }