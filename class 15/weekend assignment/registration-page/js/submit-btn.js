function onSubmit(event) {
  event.preventDefault();

  var name = document.userForm.username.value;
  var email = document.userForm.email.value;
  var password = document.userForm.password.value;
  var cpassword = document.userForm.cpassword.value;

  if (name == null || name == "") {
    alert("username is required");
  } else if (email == null || email == "") {
    alert("email is required");
  } else if (password == null || password == "") {
    alert("a password is required to register");
  } else if (cpassword == null || cpassword == "") {
    alert("confirm password");
    // alert('password does not match')
  } else if (password != cpassword) {
    alert("your passwords do not match");
  } else {
    alert("an email has been sent to confirm your registration");
  }
}
