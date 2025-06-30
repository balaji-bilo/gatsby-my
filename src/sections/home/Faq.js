import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";   

const Faq = () => {
      const data = useStaticQuery(graphql`
    query {
      allFaqJson {
        nodes {
          id
          question
          answer
        }
      }
    }
  `);
  return (
    <section className="faq-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <span className="common-heading">FAQ’s Demystified</span>
            </div>
            <div className="mb-3">
              <h2>Frequently Asked Questions Answered</h2>
            </div>
            <p>
              Uncover the secrets of SEO success with our FAQ section, where we
              demystify the world of search engine optimization.
            </p>
            <p>
              From the fundamentals to advanced strategies, find answers to your
              burning questions and empower your online presence.
            </p>
            <p>Have any other questions? Contact Us</p>
          </Col>
          <Col lg={6}>
            <Accordion>
              {data.allFaqJson.nodes.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
