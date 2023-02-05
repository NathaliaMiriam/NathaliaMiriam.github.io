import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Meus <strong className="purple">Commits</strong>
      </h1>
      <GitHubCalendar
        username="NathaliaMiriam"
        blockSize={15}
        blockMargin={5}
        color="#58f415"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
