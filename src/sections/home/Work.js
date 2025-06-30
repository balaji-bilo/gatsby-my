import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allWorkingJson {
        nodes {
          id
          number
          title
          description
          background
          backgroundColor
          backgroundImage {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  return (
    <section className="work-section">
      <Container>
        <Row className="mb-80">
          <Col lg={12}>
            <span className="common-heading">Map Your Roadmap</span>
          </Col>

          <Col lg={7}>
            <h2>Our Proven Work Process</h2>
          </Col>
          <Col lg={5} className="align-self-center">
            <p>
              Our Proven Work Process blends experience, precision, and
              innovation for consistently outstanding results.
            </p>
          </Col>
        </Row>

        <Row className="text-center position-relative">
          <div className="process__line">
            <StaticImage
              src="../../assets/images/process/process-line.png"
              alt="process-line"
              placeholder="blurred"
            />
          </div>

          {data.allWorkingJson.nodes.map((step) => {
            const style = {};

            return (
              <Col key={step.id} md={4} className="mb-4">
                <div>
                  <div
                    className="step-circle"
                    style={
                      step.background === "color"
                        ? { backgroundColor: step.backgroundColor }
                        : {}
                    }
                  >
                    {step.background === "image" && step.backgroundImage && (
                      <GatsbyImage
                        image={getImage(step.backgroundImage)}
                        alt={`Background for ${step.title}`}
                        className="background-image"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: -1,
                        }}
                      />
                    )}
                    <h4>{step.number}</h4>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
