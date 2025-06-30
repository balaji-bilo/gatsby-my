import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { StaticImage } from "gatsby-plugin-image";

const Brand = () => {
  return (
    <section className="brand-section">
      <Container>
        <Row>
          <Col lg={12}>
            <Swiper
              modules={[Autoplay]}
              loop={true} // Loop continuously
              speed={4000} // Controls smoothness
              autoplay={{
                delay: 1, // No delay between transitions
                disableOnInteraction: false,
              }}
              freeMode={true} // Allows momentum-style scrolling
              freeModeMomentum={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/1.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/2.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/3.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/4.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/5.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../assets/images/brand/6.png"
                  alt="Logo"
                  placeholder="blurred"
                  className="banner1"
                  layout="fixed"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
