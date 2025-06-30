import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { StaticImage } from "gatsby-plugin-image";
import {
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter, // X (formerly Twitter)
} from "react-icons/fa6";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

const NavigationBar = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 150
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.logoImage);
  return (
    <>
      <div className="header-top d-none d-lg-block">
        <Container>
          <div className="header-top-wrp">
            <ul className="info">
              <li>
                <div className="icon">
                  <FaRegClock />
                </div>

                <div className="icon-box">
                  <span class="paragraph-light">
                    <span class="text-white">Working Hours :</span>
                    Monday - Friday, 10am - 05pm
                  </span>
                </div>
              </li>
            </ul>

            <div className="right-info">
              <ul class="site-link">
                <li>
                  <a href="#0">agenshark@test.com</a>
                </li>
                <li>
                  <a href="tel:+3929299999">+3929 299 999</a>
                </li>
              </ul>

              <ul className="link-info">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaXTwitter />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <header className="header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              {/* <StaticImage
                src="../assets/images/logo/logo.svg"
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
              /> */}
              <GatsbyImage image={image} alt="Site Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Service
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Service Details
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blogs" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationBar;
