import React from "react";
import { getSvg } from "../images/arrow_downward_alt";

const Hero = () => {
  return (
    <main className="Hero">
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
          Start Here <span>{getSvg("arrow-downward-alt")}</span>
        </button>
      </div>
    </main>
  );
};

export default Hero;
