
function minFunktion(minForm) {
    let children = document.getElementById("form").children  //dokumenten sparas i variabeln children 
    
    
    for(let i=0; i<children.length; i++){
            console.log(children.value);
    }
       
}
function minFunktion(minForm) {
    let formFyllnad = document.form["minForm"]["förNamn"]["efterNamn"]["mailAdress"].value;
    if (formFyllnad == "") {
      alert("Vänligen fyll i namn, efternamn och mail adress");
      
    }
    else{
        document.getElementById("tack","&#128151").innerHTML="Tack!, vi hör av oss så fort vi kan."

    }
  }





