/*
function minFunktion(minForm) {
    let children = document.getElementById("minForm").children  //dokumenten sparas i variabeln children 
    
    
    for(let i=0; i<children.length; i++){
            console.log(children.value);
    }
       
}
*/
/*let kontakt = ['förNamn']['efterNamn']['mailAdress'];*/
function minFunktion(minForm) {
    let kontakt = document.Form["minForm"]["förNamn"]["efterNamn"]["mailAdress"].value;

    if (kontakt == "") {
      alert("Vänligen fyll i namn, efternamn och mail adress");
      
    }
    else{
        document.getElementById("tack").innerHTML="Tack!, vi hör av oss så fort vi kan."

    }
  }





