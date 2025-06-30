import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      allFeaturesJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  return (
    <section className="feature-section py-5">
      <Container>
        <Row className="mb-80">
          <Col lg={12}>
            <span className="common-heading">Our Core Features</span>
          </Col>

          <Col lg={7}>
            <h2>What Makes Us Different?</h2>
          </Col>
          <Col lg={5} className="align-self-center">
            <p>
              Our unique blend of experiences, perspectives, and aspirations
              sets us apart in an ever-evolving world.
            </p>
          </Col>
        </Row>

        <Row>
          {data.allFeaturesJson.nodes.map((feature) => (
            <Col key={feature.id} lg={3} md={6} sm={12} className="mb-4">
              <Card className="h-100">
                <GatsbyImage
                  image={getImage(feature.image)}
                  className="card-img-top"
                />
                <div className="content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
