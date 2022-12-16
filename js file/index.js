function emailvalidation() {
  let emailid = document.getElementById("email");
  if (emailid.value == "" || emailid.value == null) {
    document.getElementById("eml").innerHTML = "Email is required.";
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid.value)
  ) {
    return true;
  } else {
    document.getElementById("eml").innerHTML = "Invalid Email";
    return false;
  }
}
