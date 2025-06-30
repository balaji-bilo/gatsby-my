import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bgImage from "../../assets/images/reach/banner.png";
import { StaticImage } from "gatsby-plugin-image";

const Reach = () => {
  return (
    <section
      className="reach-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <span className="span-yellow">Bring success with agenshark!</span>
            </div>
            <div className="mb-3">
              <h2>Reach Out and Elevate Your SuccessNow!</h2>
            </div>
            <p>
              Our Proven Work Process blends experience, precision, and
              innovation for consistently outstanding results.
            </p>
          </Col>
          <Col lg={6}></Col>
          
        </Row>
        <div className="reach">
            <StaticImage src="../../assets/images/reach/1.png" />
          </div>
      </Container>
    </section>
  );
};

export default Reach;
