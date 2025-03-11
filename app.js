const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const savedUser = "Meow";
const savedPass = "Meow213";

loginBtn.addEventListener("click", () => {
  const userInput = username.value;
  const passInput = password.value;

  if (userInput === savedUser && passInput === savedPass) {
    console.log("Welcome back!");
  } else {
    console.log("Wrong credentials!");
  }
});
