function formFunktion() {
  const inputs = document.querySelectorAll("input"); // hämtar alla användarens inputs spar i variabeln inputs

  let forNamn = document.getElementById("fornamn").value; // Här sparar vi värdena, förnamn
  let efterNamn = document.getElementById("efternamn").value; // Här sparar vi efternamn
  let mailAdress = document.getElementById("email").value; // här sparar vi email

  // Om fältet är ifyllt sätt den till tomt igen , annars vänligen fyll i alla fält.
  if (forNamn !== "" && efterNamn !== "" && mailAdress !== "") {
    // Användaren får inte lämna tomma fält
    for (var i = 0; i < inputs.length; i++) {
      //loopen lopar igenom värden det användaren skrev in och
      inputs[i].value = ""; // sätter den till en tom sträng.
    } // För att ge chansen till någon annan användare att skriva in.

    document.getElementById("tack").innerHTML = // här hämtas id tack genom documentet och med innerhtml
      "Tack " + // tilldelas en ny text.
      forNamn +
      " " +
      efterNamn +
      " " +
      " Vi hör av oss så fort vi kan!";
  } else {
    alert("Vänligen fyll i alla fält");
  }
}
