import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./MainCard.css";
const MainCard = props => {
  return (
    <Container fluid={true} className="wa-main-card">
      <Row className="wa-row">
        <Col md={1}>
          <img src={"https://picsum.photos/150/150"} />
          <h3>props.img</h3>
        </Col>
        <Col md={2} className="wa-header-details">
          <h4>props.city</h4>
          <br />
          <p>props.deg</p>
        </Col>
        <Col className="wa-right" md={2}>
          <h5>x</h5>
        </Col>
      </Row>
      <hr />
      <Row className="wa-row">
        <Col>
          <h1>Very Interesting Content...</h1>
          <h3>props.weatherStatus</h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={12}>
          <footer>Cards Goes Here</footer>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCard;
