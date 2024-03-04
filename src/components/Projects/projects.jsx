// src/components/Projects/Projects.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a short description of Project One.",
    imageUrl: "/path/to/project-one-image.jpg",
    projectUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a short description of Project Two.",
    imageUrl: "/path/to/project-two-image.jpg",
    projectUrl: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.projectUrl} className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
