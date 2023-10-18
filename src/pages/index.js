import * as React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FAQs from "../components/FAQs";
import Video from "../components/Video";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

import Helmet from "react-helmet";

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
      <Video />
      <Resources />
      <Footer />
    </>
  );
};

export const Head = () => <title>Get Answers</title>;

export default IndexPage;
