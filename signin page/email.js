function emailvalidation() {
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
