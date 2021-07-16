import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{project.tile}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button variant="primary">{project.link}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
