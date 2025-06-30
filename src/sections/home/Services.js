import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      allServicesJson {
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
    <section className="services-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <div className="mb-80">
              <span className="common-heading">Our SEO services</span>

              <h2>Unlock Your Website's Potential with Our Services</h2>
              <p>
                Elevate your online presence and attract your target audience
                with our comprehensive SEO solutions.
              </p>
            </div>
          </Col>
          <Row>
            {data.allServicesJson.nodes.map((service) => (
              <Col key={service.id} lg={4} md={6} sm={12} className="mb-4">
                <Card className="h-100">
                  <div className="icon">
                    <GatsbyImage
                      image={getImage(service.image)}
                      className="card-img-top"
                    />
                  </div>
                  <div className="content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
