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
      "Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";
    document.getElementById("ps").style.color = "green";
    return false;
  }
  // email

  let loginmail = document.querySelector(".mail-val").value;
  if (loginmail == "" || loginmail == null) {
    document.getElementById("mailspan").innerHTML =
      "Please enter a valid email address or phone number.";
    return false;
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginmail)) {
    return true;
  } else {
    document.getElementById("mailspan").innerHTML = "*Invalid Email ID*";
    return false;
  }
}

// show pass

function showpasss() {
  let shwpass = document.querySelector(".pass-val");
  if (shwpass.type == "password") {
    shwpass.type = "text";
  } else {
    shwpass.type = "password";
  }
}
