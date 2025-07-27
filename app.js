// --- Hero Section Text Slider ---
const heroSlider = document.getElementById("heroSlider");
const heroPhrases = [
  "I Build Websites",
  "I Build Apps",
  "I write the Backends",
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

/********************
 * Data Definitions *
 *******************/
const sampleProjects = [
  {
    title: "JEE Prep",
    description:
      "Full Stack Application for JEE Students, featuring a Quiz Module and Chapter-wise Question Bank. Helps students revise effectively with topic-based filters and secure login system.",
    techStack: ["React","Node.js", ".Net", "Tailwind CSS","MySQL"],
    githubUrl: "https://github.com/yogesh7122002/Jee-Prep-Web-App",
    liveUrl: "https://github.com/yogesh7122002/Jee-Prep-Web-App",
  },
  {
    title: "Blog Website Full Stack",
    description:
      "Full Stack Blog Website built with Django, allowing users to register, log in, create posts, and manage content. Includes an admin dashboard, user authentication, and a responsive UI for seamless reading and publishing experience.",
    techStack: ["Django", "MySQL", "Tailwind CSS", "Bootstrap"],
    githubUrl: "https://github.com/yogesh7122002/MyBlog-Website-Django",
    liveUrl: "https://github.com/yogesh7122002/MyBlog-Website-Django",
  },
  {
    title: "SharpTrixAi Solutions (Website)",
    description:
      "Designed and developed a modern and responsive company website showcasing services and client offerings. Focused on clean design, fast load times, and mobile-first UI.",
    techStack: ["React.js","Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
  },
];

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"],
  backend: ["Python", "Django", "REST APIs", "Node.js (Learning)"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "Docker", "AWS", "Netlify", "GitHub Actions"],
};

const experience = [
  {
    title: "Jr.Software Developer",
    company: "DataDios Inc.",
    period: "Dec 2024 - Present",
    description: [
      "Developed and maintained REST APIs in Flask for various modules, enhancing backend reliability and performance. ",
      "Designed and implemented GitHub Actions workflows to automate testing and deployment to AWS-based servers.",
      "Built asynchronous background tasks for data deletion, using threading and job queues to free resources without blocking the user interface.",
      "Integrated user notification system to inform users post completion of background tasks.",
      "Collaborated with cross-functional teams to deliver secure, production-ready features on time.",
    ],
  },
  {
    title: "Python Developer Intern",
    company: " Console Coder, Pune",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Built FastAPI-based microservices for real-time order processing in fintech applications, enhancing throughput and latency.",
      "Optimized backend systems for performance and scalability, reducing response time for critical endpoints.",
      "Designed frontend components using React.js, improving user experience and interface responsiveness.",
      "Integrated external APIs for brokerage platforms, ensuring accurate and timely data synchronization."
    ],
  },
  {
    title: "Intern - Mediator Project",
    company: "Evertz Microsystems",
    period: "Jan 2024 - Jun 2024",
    description: [
      "Managed and maintained Linux-based environments, improving system reliability and uptime.",
      "Automated routine operations using Python scripting, cutting manual effort and improving operational efficiency.",
      "Wrote Bash scripts for system maintenance tasks including backups, cron job scheduling, and monitoring.",
      "Built and configured virtual machine environments for scalable deployments and resource distribution testing."
    ],
  },
  {
    title: "ML Intern",
    company: "IIT Bombay",
    period: "May 23 - Oct 23",
    description: [
      "Worked on Machine learning algorithms",
      "Learned about NLP models and Concepts of Machine learning",
      "Also created the project on text summarizer Using Keras NLP" 
      ],
  },
];

/********************
 * Theme Management *
 *******************/
const themeToggleBtn = document.getElementById("themeToggle");
const rootEl = document.documentElement; // <html>
const themeToggleIcon = document.getElementById("themeToggleIcon");

function setColorScheme(scheme) {
  rootEl.setAttribute("data-color-scheme", scheme);
  updateThemeIcon(scheme);
}

function updateThemeIcon(scheme) {
  if (!themeToggleIcon) return;
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  if (scheme === "dark") {
    if (sun) sun.style.display = "none";
    if (moon) moon.style.display = "inline";
  } else {
    if (sun) sun.style.display = "inline";
    if (moon) moon.style.display = "none";
  }
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const scheme = prefersDark ? "dark" : "light";
  setColorScheme(scheme);
}

function toggleTheme() {
  const current = rootEl.getAttribute("data-color-scheme") || "light";
  const newScheme = current === "light" ? "dark" : "light";
  document.body.style.transition =
    "background 0.4s cubic-bezier(0.16,1,0.3,1), color 0.4s cubic-bezier(0.16,1,0.3,1)";
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

// Hamburger menu logic
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navList = document.getElementById("mainNavList");
const mobileNavCloseBtn = document.getElementById("mobileNavCloseBtn");
function closeMobileNav() {
  if (navList && hamburgerBtn) {
    navList.classList.remove("open");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    navList.setAttribute("aria-hidden", "true");
  }
}
function openMobileNav() {
  if (navList && hamburgerBtn) {
    navList.classList.add("open");
    hamburgerBtn.classList.add("active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    navList.setAttribute("aria-hidden", "false");
  }
}
if (hamburgerBtn && navList) {
  // Always start closed on mobile
  if (window.innerWidth <= 900) {
    closeMobileNav();
  }
  function updateMobileNavCloseBtn() {
    if (!mobileNavCloseBtn) return;
    if (window.innerWidth <= 900 && navList.classList.contains("open")) {
      mobileNavCloseBtn.style.display = "block";
    } else {
      mobileNavCloseBtn.style.display = "none";
    }
  }
  hamburgerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = navList.classList.toggle("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navList.setAttribute("aria-hidden", isOpen ? "false" : "true");
    updateMobileNavCloseBtn();
  });
  // Close nav on link click (mobile)
  navList.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav();
      updateMobileNavCloseBtn();
    });
  });
  // Close nav if clicking outside nav (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 900 && navList.classList.contains("open")) {
      if (!navList.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileNav();
        updateMobileNavCloseBtn();
      }
    }
  });
  // On resize, close nav if switching to mobile
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 900) {
      closeMobileNav();
      updateMobileNavCloseBtn();
    } else {
      navList.classList.remove("open");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      navList.setAttribute("aria-hidden", "false");
      updateMobileNavCloseBtn();
    }
  });
  // Close nav on X button click
  if (mobileNavCloseBtn) {
    mobileNavCloseBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeMobileNav();
      updateMobileNavCloseBtn();
    });
  }
}

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

    const p = document.createElement("ul");
    // p.textContent = item.description;
    if (Array.isArray(item.description)) {
      item.description.forEach((list_item) => {
        const li = document.createElement("li");
        li.textContent = list_item;
        p.appendChild(li);
      });
    } else if (typeof item.description === "string") {
      const li = document.createElement("li");
      li.textContent = item.description;
      p.appendChild(li);
    }
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
