import React from "react";
import projectData from "../../project.json";
import "./project.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectsPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        marginTop: "20px",
        paddingTop: "0px",
      }}
      className="mx-3"
    >
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project) => (
          <div className="col" key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button
          variant="primary"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View App
        </Button>{" "}
        {/* This adds a space between the buttons */}
        <Button
          variant="secondary"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectsPage;
