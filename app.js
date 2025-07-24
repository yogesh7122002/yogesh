// Portfolio site JavaScript
// --- Hero Section Text Slider ---
const heroSlider = document.getElementById("heroSlider");
const heroPhrases = [
  "I Build Websites",
  "I Build Apps",
  "I write the Backends"
];
let heroIndex = 0;
let heroTimeout;

function showHeroPhrase(idx) {
  if (!heroSlider) return;
  heroSlider.textContent = "";
  let phrase = heroPhrases[idx];
  let i = 0;
  function type() {
    if (i <= phrase.length) {
      heroSlider.textContent = phrase.slice(0, i);
      i++;
      setTimeout(type, 40);
    } else {
      heroTimeout = setTimeout(() => {
        heroIndex = (heroIndex + 1) % heroPhrases.length;
        showHeroPhrase(heroIndex);
      }, 1200);
    }
  }
  type();
}

showHeroPhrase(heroIndex);
// NOTE: localStorage usage removed to comply with sandbox restrictions

/********************
 * Data Definitions *
 *******************/
const sampleProjects = [
  {
    title: "JEE Prep",
    description:
      "Full Stack Application APplicatoin For JEE Students, Consiting of Quiz Module and Seperated Questions sorted according to the Chapters and Topics",
    techStack: ["React", "Node.js", "MongoDB", "Firebase"],
    githubUrl: "https://github.com/username",
    liveUrl: "https://notworking",
  },
  {
    title: "Task Management App",
    description:
      "Responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with data visualization, location-based forecasts, and historical weather data analysis.",
    techStack: ["JavaScript", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
  },
];

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
  ],
  backend: [
    "Python",
    "Django",
    "REST APIs",
    "Node.js (Learning)",
  ],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "Docker", "AWS", "Netlify", "GitHub Actions"],
};

const experience = [
  {
    title: "Software Developer",
    company: "DataDios Inc.",
    period: "Dec 2024 - Present",
    description:
      "Working on product Developement and developed verious features and REST API's in the system",
  },
  {
    title: "Python Developer Intern",
    company: "Some Indian Startup",
    period: "AUG 2024 - DEC 2024",
    description:
      "Developed verious python based treding apps and worked on verious fetures and successfully added those into the prod",
  },
];

/********************
 * Theme Management *
 *******************/
const themeToggleBtn = document.getElementById("themeToggle");
const rootEl = document.documentElement; // <html>

function setColorScheme(scheme) {
  rootEl.setAttribute("data-color-scheme", scheme);
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setColorScheme(prefersDark ? "dark" : "light");
}

function toggleTheme() {
  const current = rootEl.getAttribute("data-color-scheme") || "light";
  const newScheme = current === "light" ? "dark" : "light";
  document.body.style.transition = "background 0.4s cubic-bezier(0.16,1,0.3,1), color 0.4s cubic-bezier(0.16,1,0.3,1)";
  document.body.style.opacity = 0.7;
  setTimeout(() => {
    setColorScheme(newScheme);
    document.body.style.opacity = 1;
  }, 180);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

initTheme();

/************************
 * Navigation Management *
 ************************/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("[data-section]");

// --- Smooth scroll and section fade-in ---
function showSection(id) {
  sections.forEach((section) => {
    if (section.id === id) {
      section.classList.remove("hidden");
      // Animate fade-in
      section.style.opacity = 0;
      setTimeout(() => {
        section.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1)";
        section.style.opacity = 1;
      }, 10);
      // Scroll smoothly to top of section
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      section.classList.add("hidden");
      section.style.opacity = 0;
      section.style.transition = "none";
    }
  });
  // Update active nav state
  navLinks.forEach((link) => {
    const route = link.getAttribute("data-route");
    if (route === id) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function navigate(route) {
  history.pushState({ route }, "", `#${route}`);
  showSection(route);
}

// Attach click handlers to nav/action links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const route = link.getAttribute("data-route");
    if (!route) return;
    e.preventDefault();
    navigate(route);
  });
});

// Popstate handler (browser back / forward)
window.addEventListener("popstate", (e) => {
  const route = e.state?.route || location.hash.replace("#", "") || "home";
  showSection(route);
});

// Initial route setup
(function () {
  const initialRoute = location.hash.replace("#", "") || "home";
  showSection(initialRoute);
})();

/*************************
 * Populate dynamic data  *
 *************************/
// Skills Grid
const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) {
  Object.entries(skills).forEach(([category, list]) => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const h4 = document.createElement("h4");
    h4.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    card.appendChild(h4);

    const ul = document.createElement("ul");
    ul.className = "skill-list";
    list.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });

    card.appendChild(ul);
    skillsGrid.appendChild(card);
  });
}

// Experience Timeline
const expTimeline = document.getElementById("experienceTimeline");
if (expTimeline) {
  experience.forEach((item) => {
    const div = document.createElement("div");
    div.className = "timeline-item";

    const h4 = document.createElement("h4");
    h4.textContent = `${item.title} @ ${item.company}`;
    div.appendChild(h4);

    const span = document.createElement("span");
    span.textContent = item.period;
    div.appendChild(span);

    const p = document.createElement("p");
    p.textContent = item.description;
    div.appendChild(p);

    expTimeline.appendChild(div);
  });
}

// Projects Grid
const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  sampleProjects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Body
    const body = document.createElement("div");
    body.className = "project-card__body";

    // Project image placeholder
    const img = document.createElement("div");
    img.className = "project-card__image";
    img.textContent = project.title[0]; // Use first letter as placeholder
    card.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const tagsWrap = document.createElement("div");
    tagsWrap.className = "flex flex-wrap";
    project.techStack.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tech;
      tagsWrap.appendChild(tag);
    });

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(tagsWrap);

    // Footer
    const footer = document.createElement("div");
    footer.className = "project-card__footer";

    const liveA = document.createElement("a");
    liveA.href = project.liveUrl;
    liveA.target = "_blank";
    liveA.className = "btn btn--primary btn--sm";
    liveA.textContent = "Live";

    const codeA = document.createElement("a");
    codeA.href = project.githubUrl;
    codeA.target = "_blank";
    codeA.className = "btn btn--outline btn--sm";
    codeA.textContent = "Code";

    footer.appendChild(liveA);
    footer.appendChild(codeA);

    card.appendChild(body);
    card.appendChild(footer);

    projectsGrid.appendChild(card);
  });
}
