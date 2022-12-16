function emailvalidation1() {
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

function emailvalidation2() {
  let emailid = document.getElementById("email2");
  if (emailid.value == "" || emailid.value == null) {
    document.getElementById("eml2").innerHTML = "Email is required.";
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid.value)
  ) {
    return true;
  } else {
    document.getElementById("eml2").innerHTML = "Invalid Email";
    return false;
  }
}
