// const form = querySelector("#form_id")

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     fetch("/user", {
//         method: "POST",
//         body: JSON.stringify(Object.fromEntries(new FormData(form)))
//     })
// })

// register
form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = form.querySelector("#username").value;
    const email = form.querySelector("#inputEmail4").value;
    const password = form.querySelector("#inputPassword4").value;
    const role = form.querySelector("#role").value;
  
    const newUserId = {
      name: username,
      email: email,
      password: password,
      role: role,
    };

    createNewUser(newUserId);
  });

// const registerFormHandler = document.getElementById("name");
// const passwordRegForm = document.getElementById("password");
// const formLogin = document.getElementById("form");
// const passwordLogin = document.getElementById("password-login");

// const getDataLogin = localStorage.getItem("name");
// const getDataPassword = localStorage.getItem("password");
// const button = document.getElementById("register")

// function loginHandler() {
//     if (
//         getDataLogin === formLogin.username.value &&
//         getDataPassword === formLogin.pasword.value
//     ) {
//         location.href = "/chapter_3/index.html"
//     } else {
//         console.log("password not match");
//         location.reload();
//     }
// }

// function registerHandler() {
//     localStorage.setItem("name", registerFormHandler.value);
//     localStorage.setItem("password", passwordRegForm.value);
// }