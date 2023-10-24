import * as React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FAQs from "../components/FAQs";
import Quote from "../components/Quote";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

import Helmet from "react-helmet";
import { Script } from "gatsby";

import "../components/css/styles.scss";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.min.css"
          rel="stylesheet"
        ></link>
      </Helmet>

      <Nav />
      <Hero />
      <FAQs />
      <Quote />
      <Resources />
      <Footer />

      <Script>
        {`const navArea = document.getElementsByClassName("Nav");
          const faqArea = document.getElementsByClassName("FAQs");
          const quoteArea = document.getElementsByClassName("Quote");
          const resourcesArea = document.getElementsByClassName("Resources");

          function elementsOverlap(el1, el2) {
            const domRect1 = el1[0].getBoundingClientRect();
            const domRect2 = el2[0].getBoundingClientRect();

            return !(
              domRect1.top > domRect2.bottom ||
              domRect1.right < domRect2.left ||
              domRect1.bottom < domRect2.top ||
              domRect1.left > domRect2.right
            );
          }

          console.log(elementsOverlap(navArea, faqArea));
          console.log(elementsOverlap(navArea, quoteArea));
          console.log(elementsOverlap(navArea, resourcesArea));`}
      </Script>
    </>
  );
};

export const Head = () => <title>Get Answers PA</title>;

export default IndexPage;
