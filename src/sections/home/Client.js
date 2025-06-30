import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const Client = () => {
  const data = useStaticQuery(graphql`
    query {
      allClientJson {
        nodes {
          id
          name
          role
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const slides = data.allClientJson.nodes;
  const extendedSlides = slides.length < 3 ? [...slides, ...slides] : slides;

  return (
    <section className="client-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <div className="mb-80">
              <div className="mb-3">
                <span className="common-heading">
                  Our client’s testimonials
                </span>
              </div>
              <div className="mb-3">
                <h2>Client Stories of AgenShark</h2>
              </div>
              <p>
                Dive into the success stories of AgenShark's clients—where
                digital dreams become reality.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={extendedSlides.length > 1}
              pagination={{ clickable: true }}s
              //   autoplay={extendedSlides.length > 1 ? { delay: 3000 } : false}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
              }}
              //   loop={extendedSlides.length > 2}
            >
              {extendedSlides.map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`}>
                  <div className="testimonial">
                    <Card>
                      <div className="coma-top">
                        <StaticImage 
                        src="../../assets/images/testimonial/coma-top.png"
                        />
                      </div>
                       <div className="coma-bottom">
                        <StaticImage 
                        src="../../assets/images/testimonial/coma-bottom.png"
                        />
                      </div>
                      <div className="star">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <FaStar />
                      </div>
                      <div className="box">
                        <p className="mb-3">"{item.text}"</p>
                        <div className="box-image">
                          <GatsbyImage
                            image={getImage(item.image)}
                            // alt={`Background for ${step.title}`}
                            className="background-image"
                          />
                          <h5 className="mb-0">{item.name}  

                          <span className="ms-1">{item.role}</span>
                          </h5>
                        </div>
                      </div>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
