import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "DDJ-Budget-Hub-Backend",
      description: "A web app for tracking personal expenses",
      githubUrl: "https://github.com/Lindevin101/DDJ-Bugget-Hub-Backend-",
    },
    {
      title: "OnlyPets",
      description: "A fullstack social media app for pets",
      githubUrl: "https://github.com/Lindevin101/onlypets",
    },
    {
      title: "Guess-The-NBA-Team",
      description:
        "Created a hangman game about NBA Team Names using HTML, CSS, and Javascript",
      githubUrl: "https://github.com/Lindevin101/DDJ-Bugget-Hub-Backend-",
    },
    {
      title: "Pokemon Model",
      description:
        "Created a modal that displays information on first gen Pokemons",
      githubUrl: "https://github.com/Lindevin101/Pokemon_Modal",
    },
    {
      title: "NBA Players API",
      description:
        "Used mongoose and express to create an API about NBA players",
      githubUrl: "https://github.com/Lindevin101/NBA-API",
    },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
