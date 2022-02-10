import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/marc-11.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              From a very young age I fell in love with computers and new technologies and then I discovered programming that captivated me and I realized that all I wanted to do was program and learn everything I could.
              <br />
              <br />My most fluent programming languages are
              <i>
                <b className="purple"> Python, C++ i Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are&nbsp;
              <i>
                <b className="purple">programming </b> and
                everything related to {" "}
                <b className="purple">
                Machine Learning and Data Science.
                </b>
              </i>
              <br />
              <br />
              Aside from being my profession, programming is also one of my hobbies. In my spare time I try to learn new languages or new methodologies. Aside from programming, I also spend a lot of time playing video games.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilePic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MarcFerrerMargarit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mferrer_24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marcferrermargarit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/markitus_2_4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
