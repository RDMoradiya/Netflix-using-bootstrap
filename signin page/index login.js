function vali_function() {
  let x = document.querySelector(".mail-val").value;
  let y = document.querySelector(".pass-val").value;

  if (x == "" && y == "") {
    document.querySelector(".ps_val").innerHTML = "Enter password";
    document.querySelector(".mail_sp").innerHTML =
      "Please enter a valid email address or phone number";
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
    document.querySelector(".mail_sp").innerHTML = "Invalid Email ID";
    return false;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(y)) {
    document.querySelector(".ps_val").innerHTML =
      "Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";
    return false;
  } else {
    document.querySelector(".mail_sp").innerHTML = "";
    document.querySelector(".ps_val").innerHTML = "";
    return true;
  }
}
function showpasss() {
  let shwpass = document.querySelector(".pass-val");
  if (shwpass.type == "password") {
    shwpass.type = "text";
  } else {
    shwpass.type = "password";
  }
}
