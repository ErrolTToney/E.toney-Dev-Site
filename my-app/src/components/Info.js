import React from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import DropdownButton from 'react-bootstrap/DropdownButton'
import "./Info.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


function Info() {
  return (
    <div className="body">
     

          <h1 className="title-head">My Info</h1>
     
        <Container className="info-bar">
          <h1 className="header-name">Errol T Toney. Jr</h1>
          <p className="title-occp">Full-Stack Web Developer</p>
            <ul>
                <li>
        <a href="https://github.com/ErrolTToney" className="git-link">GitHub</a>
                </li>
                <li>
        <a href="https://www.linkedin.com/in/errol-toney-1a98711bb/" className="LinkedIn">LinkedIn</a>
                </li>
            </ul>
        </Container>
        <Container className="card-container">
        <DropdownButton title="About Me">
        <DropdownItem className="dropdown-item">
        <Card style={{ width: '70rem' }}>
          <Card.Body className="Card-body">
          <Card.Title>Summary</Card.Title>
          <Card.Text>
        My previous experience has given me the ability to <b>problem solve</b>, <b>critically think</b>, and give close <b>attention to detail</b> in my work.
        <br/> I have begun my tech education with Kenzie academy so that I could learn to create content and help those around me succeed in their own business <br/>or to just simply express their hobbies.
        <br/>In order to achieve my success, Kenzie had driven me to acquire skills as a Full-Stack developer,<br/> learning Javascript & the <b>MERN stack</b> for Nine months.
          </Card.Text>
          </Card.Body>
        </Card>
        </DropdownItem>
        </DropdownButton>

        <DropdownButton title="Skills">
        <DropdownItem className="dropdown-item">
        <Card style={{ width: '10rem' }}>
          <Card.Body className="Card-body">
          <Card.Text>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>GIT</li>
            <li>PHP</li>
            <li>UI/UX</li>
            <li>APIs</li>
            <li>Data Structures</li>
            <li>JQuery</li>
            <li>WebPack</li>
            <li>Painting</li>
          </ul>
          </Card.Text>
          </Card.Body>
        </Card>
        </DropdownItem>
        </DropdownButton>
        </Container>

    </div>
  );
}

export default Info;
