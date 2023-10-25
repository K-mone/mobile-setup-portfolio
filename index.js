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
const projectsSection = document.querySelector("#projects");
const blurProjects = document.querySelectorAll("#projects > div");
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

function createDiv(buttonId) {
  const div = document.createElement("div");
  const liveSiteBtn = document.createElement("a");
  const sourceBtn = document.createElement("a");
  const projectExitBtn = document.createElement("button");
  const projectsTitle = document.createElement("h3");
  const projectsLanguages = document.createElement("ul");
  const images = document.createElement("img");
  const paragraph = document.createElement("p");
  projectsTitle.innerText = `${projects[buttonId].title}`;
  projectsTitle.classList.toggle("popup-title");
  projectsLanguages.innerHTML = `<li>${projects[buttonId].technologies[0]}</li>
  <li>${projects[buttonId].technologies[1]}</li>
  <li>${projects[buttonId].technologies[2]}</li>`;
  projectsLanguages.classList.toggle("popup-languages");
  images.src = `${projects[buttonId].image}`;
  images.classList.toggle("popup-img");
  paragraph.innerText = `${projects[buttonId].description}`;
  paragraph.classList.toggle("popup-paragraph");

  liveSiteBtn.textContent = "See Live";
  liveSiteBtn.href = `${projects[buttonId].live_link}`;
  sourceBtn.textContent = "See Source";
  sourceBtn.href = `${projects[buttonId].source_link}`;
  liveSiteBtn.classList.add("popup-btn", "live");
  sourceBtn.classList.add("popup-btn", "popup-margin", "source");
  projectExitBtn.style.backgroundImage = "URL('images/Cancel-icon.png')";
  projectExitBtn.style.backgroundRepeat = "no-repeat";
  projectExitBtn.style.backgroundSize = "cover";
  projectExitBtn.classList.add("popup-exit");
  div.classList.toggle("popup");

  if (window.innerWidth < 900) {
    div.classList.add("display", "flex");
    div.classList.toggle("mobile-width");
    projectsTitle.classList.toggle("mobile-title");
    projectsLanguages.classList.toggle("mobile-languages");
    images.classList.toggle("popup-mobile-img");
    paragraph.classList.toggle("popup-mobile-p");
    sourceBtn.classList.toggle("mobile-btn");
    liveSiteBtn.classList.toggle("mobile-btn");
  }

  div.appendChild(projectsTitle);
  div.appendChild(projectsLanguages);
  div.appendChild(images);
  div.appendChild(paragraph);
  div.appendChild(liveSiteBtn);
  div.appendChild(sourceBtn);
  div.appendChild(projectExitBtn);
  projectsSection.appendChild(div);

  projectExitBtn.addEventListener("click", () => {
    div.remove();
    document.body.classList.toggle("no-scroll");
    document.body.style.background = "#fff";
    blurProjects.forEach((project) => project.classList.toggle("blur"));
  });
}

const buttons = [...document.querySelectorAll(".project-btn")];

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", () => {
    blurProjects.forEach((project) => project.classList.toggle("blur"));
    createDiv(i);
    document.body.style.background = "black";
    document.body.classList.toggle("no-scroll");
  });
}
