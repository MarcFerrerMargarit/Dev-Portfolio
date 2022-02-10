import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marc Ferrer Margarit </span>
            from <span className="purple"> Barcelona, Spain.</span>
            <br />I am a Software Engineeer, developing software all the time.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Don't thing about tomorrow, focus on Today!"{" "}
          </p>
          <footer className="blockquote-footer">Marc.F</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
