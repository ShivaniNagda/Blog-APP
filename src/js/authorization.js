let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signupForm = document.getElementById("signupForm");
let signinForm = document.getElementById("signinForm");

function signup() {
let nameValue = name.value;
let emailValue = email.value;
let passwordValue = password.value;
let passwordConfirmValue = confirmPassword.value;
   console.log(name,password,confirmPassword)
    console.log(nameValue,emailValue,passwordValue, passwordConfirmValue);
    if (passwordValue !== passwordConfirmValue) {
    alert("Passwords do not match");
    window.location.href = "../html/signup.html";
  } else {
    localStorage.setItem("name",nameValue);
    localStorage.setItem("email",emailValue);
    localStorage.setItem("password",passwordValue);
    alert("Registration successful");
    window.location.href = "../html/signin.html";
  }
}
signupForm.addEventListener("submit",signup);
