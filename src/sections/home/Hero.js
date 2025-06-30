import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="banner-section">
      <Container>
        <Row>
          <Col lg={6}>
            <span className="common-heading">
              Skyrocket your website
              <StaticImage
                src="../../assets/images/banner/roket.png"
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
              />{" "}
            </span>
            <h1 className="mb-4">
              Maximize your Website's power with Our SEO Solutions.
            </h1>
            <p>
              Unleash the full potential of your website and elevate its online
              presence with our comprehensive SEO solutions.
            </p>
            {/* <InputGroup
              className="p-2 rounded shadow-sm"
              style={{ maxWidth: "500px" }}
            >
              <InputGroup.Text>
             
              </InputGroup.Text>
              <FormControl placeholder="Enter your website URL" />
              <Button variant="warning" className="text-dark fw-semibold">
                Get Instant Result
              </Button>
            </InputGroup> */}
          </Col>
          <Col lg={6} className="banner-logo">
            <StaticImage
              src="../../assets/images/banner/1.png"
              alt="Logo"
              placeholder="blurred"
              className="banner1"
              layout="fixed"
            />
            <StaticImage
              src="../../assets/images/banner/banner-three-hero-bg.png"
              alt="Logo"
              placeholder="blurred"
              className="hero-bg"
            />

            <StaticImage
              src="../../assets/images/banner/three-kit1.png"
              alt="Logo"
              placeholder="blurred"
              className="kit1"
            />
            <StaticImage
              src="../../assets/images/banner/three-kit2.png"
              alt="Logo"
              placeholder="blurred"
              className="kit2"
            />
            <StaticImage
              src="../../assets/images/banner/three-kit3.png"
              alt="Logo"
              placeholder="blurred"
              className="kit3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
