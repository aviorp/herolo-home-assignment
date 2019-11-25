import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./MainCard.css";
const MainCard = props => {
  return (
    <>
      <div className="wa-main-card">
        <Row className="wa-row">
          <Col md={2}>
            <img src={"https://picsum.photos/150/150"} />
            <h3>props.img</h3>
          </Col>
          <Col className="wa-right" sm={10}>
            <h5>Add to Favorite big icon</h5>
          </Col>
        </Row>
        <hr />
      </div>
    </>
  );
};

export default MainCard;
