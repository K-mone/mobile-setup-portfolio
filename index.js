const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.innerText = "The email address has to be in lower case";
    errorMessage.style.color = "red";
  } else {
    form.submit();
    errorMessage.style.display = "none";
  }
});
