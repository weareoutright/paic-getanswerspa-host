import React from "react";
import { getSvg } from "../images/arrow_downward_alt";
import heroImg from "../images/hero-image.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
  return (
    <main className="Hero" id="home">
      <div className="hero-main-content">
        <h1>
          We get it,
          <br />
          Vaccines
          <br />
          Can Be
          <br />
          Confusing.
        </h1>
        <h2>Pennsylvania Doctors have answers.</h2>
        <button>
          <AnchorLink to="#faqs">
            Start Here <span>{getSvg("arrow-downward-alt")}</span>
          </AnchorLink>
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="placeholder" />
      </div>
    </main>
  );
};

export default Hero;
