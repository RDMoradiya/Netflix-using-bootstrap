function emailvalidation() {
  // pass

  let pass = document.querySelector(".pass-val");
  let passex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (pass.value == "") {
    document.getElementById("ps").innerHTML =
      "Your password must contain between 4 and 60 characters.";
    return false;
  } else if (pass.value.match(passex)) {
    document.getElementById("cps1").innerHTML = "";
  } else {
    document.getElementById("ps").innerHTML =
      "** Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";
    document.getElementById("ps").style.color = "green";
    return false;
  }
}
