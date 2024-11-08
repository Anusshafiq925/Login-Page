function submit() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var email1 = email.value;
  var password1 = password.value;

  if (email1.toLowerCase() === "admin") {
    if (password1.toLowerCase() === "admin") {
      alert("You Are logged in");
    } else {
      alert("Enter a Valid Password");
    }
  } else {
    alert("Enter a Valid Email");
  }

  console.log(email1);
  console.log(password1);
}
