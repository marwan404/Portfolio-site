fetch('src/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects-container");

    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.cursor = "pointer";

      // Card click: open first repo (unless clicking a link)
      card.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") return;
        if (p.repos && p.repos.length > 0) {
          window.open(p.repos[0].url, "_blank", "noopener,noreferrer");
        } else if (p.repo) {
          window.open(p.repo, "_blank", "noopener,noreferrer");
        }
      });

      let repoLinks = "";
      if (p.repos) {
        repoLinks = p.repos.map(r =>
          `<a href="${r.url}" class="highlight-link" target="_blank">${r.name} Repo</a>`
        ).join(" | ");
      } else if (p.repo) {
        repoLinks = `<a href="${p.repo}" class="highlight-link" target="_blank">Repo</a>`;
      }

      card.innerHTML = `
        <div class="project-content">
          <h3>${p.title}</h3>
          ${p.tag ? `<div class="project-tag">${p.tag}</div>` : ""}
          <p>${p.description}</p>
          ${repoLinks ? `<p>${repoLinks}</p>` : ""}
          ${p.link ? `<p><a href="${p.link}" class="highlight-link" target="_blank">Visit</a></p>` : ""}
        </div>
      `;

      
    });
  })
  .catch(err => {
    console.error("Error loading projects.json", err);
  });
