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

/* Local storage */

document.addEventListener("DOMContentLoaded", function () {
  const myStorage = {
    name: "",
    email: "",
    message: "",
  };

  const form = document.getElementById("contact-form");

  form.addEventListener("change", () => {
    myStorage.name = document.getElementById("name").value;
    myStorage.email = document.getElementById("email").value;
    myStorage.message = document.getElementById("message").value;
    localStorage.setItem("storageInfo", JSON.stringify(myStorage));
  });

  const storageData = localStorage.getItem("storageInfo");
  if (storageData) {
    const storageObject = JSON.parse(storageData);

    document.getElementById("name").value = storageObject.name;
    document.getElementById("email").value = storageObject.email;
    document.getElementById("message").value = storageObject.message;
  }
});
