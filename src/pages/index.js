import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import "../style/responsive.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/Layout";
import Hero from "../sections/home/Hero";
import Brand from "../sections/home/Brand";
import Features from "../sections/home/Features";
import AboutUs from "../sections/home/AboutUs";
import Services from "../sections/home/Services";
import Work from "../sections/home/Work";
import Client from "../sections/home/Client";
import Faq from "../sections/home/Faq";
import Reach from "../sections/home/Reach";


const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero/>
        <Brand/>
        <Features/>
        <AboutUs/>
        <Services/>
        <Work/>
        <Client/>
        <Faq/>
        <Reach/>
        
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
