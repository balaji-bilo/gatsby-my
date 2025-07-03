import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg={6} className="position-relative">
            <StaticImage
              src="../../assets/images/about/1.png"
              alt="about"
              placeholder="blurred"
              layout="constrained"
              // className="w-full h-[200px] object-cover"
            />

            <div className="kit1">
              <StaticImage
                src="../../assets/images/about/kit1.png"
                alt="about"
                placeholder="blurred"
                layout="constrained"
              />
            </div>

            <StaticImage
              src="../../assets/images/about/shape.png"
              alt="about"
              placeholder="blurred"
              className="shape1"
           
            />
          </Col>

          <Col lg={6}>
            <div className="">
              <span className="common-heading">Why Choose Us?</span>
              <h2 className="mb-3">Our Tailored Strategies for our Success</h2>
              <p>
                Crafting precision in every detail, our tailored strategies pave
                the way for your unparalleled success in the digital landscape.
              </p>
            </div>
            <ul className="">
              <li>
                <div className="icon bg-1">
                  <StaticImage
                    src="../../assets/images/about/icon1.png"
                    alt="about"
                  />
                </div>
                <div className="">
                  <h3>First Working Process</h3>
                  <p>
                    We analyze your needs, setting the stage for a bespoke and
                    impactful SEO strategy.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon bg-2">
                  <StaticImage
                    src="../../assets/images/about/icon2.png"
                    alt="about"
                  />
                </div>
                <div className="">
                  <h3>Dedicated Expert Team</h3>
                  <p>
                    Empower your success with our dedicated expert team,
                    committed to navigating the complexities of SEO.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon bg-3">
                  <StaticImage
                    src="../../assets/images/about/icon3.png"
                    alt="about"
                  />
                </div>
                <div className="">
                  <h3>24/7 Customer Support</h3>
                  <p>
                    Experience peace of mind with our 24/7 customer support,
                    ensuring prompt assistance and personalized service.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
