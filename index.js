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

// details popup window

const projects = [
  {
    id: "main-btn",
    title: "Multi-Post Stories",
    image: "images/Snapshoot Portfolio.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["css", "html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn1",
    title: "Professional Art Printing Data",
    image: "images/project-1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn2",
    title: "Data Dashboard Healthcare",
    image: "images/project-2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn3",
    title: "Website Portfolio",
    image: "images/project-3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn4",
    title: "Professional Art Printing Data",
    image: "images/project-4.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn5",
    title: "Data Dashboard Healthcare",
    image: "images/project-1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
  {
    id: "card-btn6",
    title: "Website Portfolio",
    image: "images/project-2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ["html", "bootstrap", "Ruby"],
    live_link: "https://k-mone.github.io/mobile-setup-portfolio/",
    source_link: "https://github.com/K-mone/mobile-setup-portfolio.git",
  },
];

const blurProjects = document.querySelectorAll("#container > div");
const projectsSection = document.querySelector("#projects");
const projectSection = document.querySelector("#projects");
const projectTitle = document.querySelector(".project-title");
const projectText = document.querySelector(".project-paragraph");
const image = document.querySelector("#img");
const projectLanguages = document.querySelector("#languages");
const projectExitBtn = document.querySelector("#close-btn");
const liveLink = document.querySelector("#live-link");
const sourceLink = document.querySelector("#source-link");

const projectBtn = [...document.querySelectorAll(".project-btn")];
projectBtn.forEach((item, i) =>
  item.addEventListener("click", () => {
    projectSection.style.display = "block";
    const project = projects[i];
    projectTitle.textContent = project.title;
    projectText.textContent = project.description;
    liveLink.href = project.live_link;
    sourceLink.href = project.source_link;
    image.setAttribute("src", project.image);
    blurProjects.forEach((project) => project.classList.toggle("blur"));
    for (let i = 0; i < projectBtn.length; i += 1) {
      projectLanguages.innerHTML = `<li>${project.technologies[0]}</li>
  <li>${project.technologies[1]}</li>
  <li>${project.technologies[2]}</li>`;
      document.body.style.background = "black";
      document.body.classList.toggle("no-scroll");
    }
  })
);

const close = document.querySelector("#close-btn");
close.onclick = () => {
  projectSection.style.display = "none";
  document.body.classList.toggle("no-scroll");
  document.body.style.background = "#fff";
  blurProjects.forEach((project) => project.classList.toggle("blur"));
};

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
