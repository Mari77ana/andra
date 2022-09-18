function formFunktion() {
  const inputs = document.querySelectorAll("input");

  let forNamn = document.getElementById("fornamn").value;
  let efterNamn = document.getElementById("efternamn").value;
  let mailAdress = document.getElementById("email").value;

  if (forNamn !== "" && efterNamn !== "" && mailAdress !== "") {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    document.getElementById("tack").innerHTML =
      "Tack " +
      forNamn +
      " " +
      efterNamn +
      " " +
      " Vi hör av oss så fort vi kan!";
  } else {
    alert("Vänligen fyll i alla fält");
  }
}
