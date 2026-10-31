
async function loadCV() {
    const workList = document.querySelector("#work-list");
    const educationList = document.querySelector("#education-list");

    try {
        const response = await fetch("./cv.json");

        if (!response.ok) {
            throw new Error("Kunde inte hämta CV");
        }

        const data = await response.json();

        data.workExperience.forEach((job) => {
            const item = document.createElement("div");
            item.className = "experience-item";

            item.innerHTML = `
                <div class="experience-left">
                    <h3>${job.role}</h3>
                    <p>${job.workplace}</p>
                </div>
                <div class="experience-right">
                    <p>${job.period}</p>
                </div>
            `;

            workList.appendChild(item);
        });

        data.education.forEach((school) => {
            const item = document.createElement("div");
            item.className = "experience-item";

            item.innerHTML = `
                <div class="experience-left">
                    <h3>${school.program}</h3>
                    <p>${school.school}</p>
                </div>
                <div class="experience-right">
                    <p>${school.period}</p>
                </div>
            `;

            educationList.appendChild(item);
        });

    } catch (error) {
        workList.textContent = "Kunde inte ladda arbeten.";
        educationList.textContent = "Kunde inte ladda utbildningar.";
        console.error(error);
    }
}

loadCV();

async function loadProjects() {
    const projectsList = document.querySelector("#projects-list");

    projectsList.textContent = "Loading projects...";

    try {
        const response = await fetch(
            "https://api.github.com/users/alamhaniah-cell/repos"
        );

        if (!response.ok) {
            throw new Error("Could not fetch projects");
        }

        const projects = await response.json();

        projectsList.innerHTML = "";

        if (projects.length === 0) {
            projectsList.textContent = "No projects found.";
            return;
        }

        projects.forEach((project) => {
            const card = document.createElement("div");
            card.className = "project-card";

            const title = document.createElement("h3");
            title.textContent = project.name;

            const description = document.createElement("p");
            description.textContent =
                project.description || "No description available.";

            const link = document.createElement("a");
            link.href = project.html_url;
            link.textContent = "View Code";
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);

            projectsList.appendChild(card);
        });

    } catch (error) {
        projectsList.textContent = "Could not load projects.";
        console.error(error);
    }
}

loadProjects();

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");

    if (document.documentElement.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark mode";
    } else {
        themeButton.textContent = "☀️ Light mode";
    }
});

const projectsButton = document.querySelector("#projects-toggle");
const projectsList = document.querySelector("#projects-list");

projectsButton.addEventListener("click", () => {
    if (projectsList.hidden) {
        projectsList.hidden = false;
        projectsButton.textContent = "Hide projects";
        projectsButton.setAttribute("aria-expanded", "true");
    } else {
        projectsList.hidden = true;
        projectsButton.textContent = "Show projects";
        projectsButton.setAttribute("aria-expanded", "false");
    }
});

