const projects = [
  {
    title: "Physics Calculator",
    tag: "Basic calculator",
    description: "A tool where you pick a certain formula and plug in some numbers and the app calculates the result."
  },
  {
    title: "Math Question Finder",
    tag: "A tool used to find math questions based on certain criteria",
    description: "Searches a large database of past paper questions by difficulty, topic and number of marks."
  },
  {
    title: "Todo List App",
    tag: "An app to track daily achievements",
    description: "Allows you to add, complete and remove tasks to track goals."
  },
  {
    title: "Clicker Game",
    tag: "A CLI game",
    description: "Click space to earn coins and buy upgrades. Features achievements and progress tracking."
  },
  {
    title: "CLI Program Gallery",
    link: "https://marwan404.github.io/CLIshowcase/",
    description: 'Website: <a href="https://marwan404.github.io/CLIshowcase/" class="highlight-link">CLI program gallery</a>'
  },
  {
    title: "More Projects",
    tag: "Coming Soon",
    description: "I have more projects in development, currently on hold due to other commitments."
  }
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-content">
      <h3>${p.title}</h3>
      ${p.tag ? `<div class="project-tag">${p.tag}</div>` : ""}
      <p>${p.description}</p>
    </div>
  `;

  container.appendChild(card);
});
