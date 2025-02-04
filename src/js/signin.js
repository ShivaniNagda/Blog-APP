function signin(e) {
e.preventDefault();
  alert('Hye')
  let emailValue = email.value;
  let passwordValue = password.value;
      let userEmail = localStorage.getItem("email",emailValue);
    let userPassword =  localStorage.getItem("password",passwordValue);
       if (emailValue !== userEmail || passwordValue !== userPassword ) {
      alert("Incorrect Credentials.");
      window.location.href = "/src/html/signin.html";
    } else {
      alert("log in successfull");
      window.location.href = "/src/html/blogger.html";
    }
  }
  
  signinForm.addEventListener("click",signin);
  