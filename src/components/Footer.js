import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="pb-60 gy-4">
          <Col lg={3} md={6}>
            <div className="mb-4">
              <StaticImage src="../assets/images/logo/logo.png" />
            </div>

            <p>
              AgenShark is a multinational agency. we guide startups from
              concept to market leadership.
            </p>
          </Col>
          <Col lg={2} md={6}>
            <h3 className="mb-4">Company</h3>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Services</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Blog</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h3 className="mb-4">Support</h3>
            <ul>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Book A Demo</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Terms Conditions</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Cookies</Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h3 className="mb-4">Social</h3>
            <ul>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Discord</Link>
              </li>
              <li>
                {" "}
                <Link to="/">LinkedIn</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Telegram</Link>
              </li>
              <li>
                {" "}
                <Link to="/">x</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h3 className="mb-4">Subscribe Now</h3>
            <div className="mb-3">
              <InputGroup>
                <FormControl placeholder="Enter email address" />
                <Button variant="warning">
                  <FaArrowRightLong className="icon" />
                </Button>
              </InputGroup>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="by signing up, you agree to receive mail"
                className="check"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="footer-bottom">
            <Row>
                <Col lg={6}>
                <p>© Copyright 2024 AgenShark. Inc.</p>
                </Col>
                <Col lg={6} className="">

              <div className="bottom">
                  <CiLocationOn />
              <span>   17 York Street London, United Kingdom W1W7AB</span>
              </div>
                </Col>

            </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
