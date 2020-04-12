import React from "react";
import "./hero.scss";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function hero() {
  return (
    <>
      <Jumbotron>
        <h1>COVID-19</h1>
        <p>
        Corona Virus is, unfortunately, spreading through the entire world. As a Developer I just thought to make a Simple webpage to 
        spread awareness by visualizing the data in the form of charts and simple text tables.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default hero;
