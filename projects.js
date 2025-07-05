fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects-container");

    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <div class="project-content">
          <h3>${p.title}</h3>
          ${p.tag ? `<div class="project-tag">${p.tag}</div>` : ""}
          <p>${p.description}</p>
          ${p.link ? `<p><a href="${p.link}" class="highlight-link" target="_blank">Visit</a></p>` : ""}
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading projects.json", err);
  });
