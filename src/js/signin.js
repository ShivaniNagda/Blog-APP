function signin(e) {
e.preventDefault();
  let emailValue = email.value;
  let passwordValue = password.value;
      let userEmail = localStorage.getItem("email",emailValue);
    let userPassword =  localStorage.getItem("password",passwordValue);
       if (emailValue !== userEmail || passwordValue !== userPassword ) {
      alert("Incorrect Credentials.");
      window.location.href = "../html/signin.html";
    } else {
      alert("log in successfull");
      window.location.href = "../html/blogger.html";
    }
  }
  
  signinForm.addEventListener("click",signin);
  