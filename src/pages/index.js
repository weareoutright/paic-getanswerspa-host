import * as React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FAQs from "../components/FAQs";
import Video from "../components/Video";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

import "../components/css/index.scss";

const IndexPage = () => {
  return (
    <>
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
