import React from "react";
import { DISPLAYED_RESOURCES } from "../constants/resourcesInfo";
import MainResourceTopic from "./MainResourceTopic";
import resourceImg from "../images/adult-hugging-child.png";

// refactor into a single topic that can be mapped

const Resources = () => {
  return (
    <section className="Resources" id="resources">
      <h2>Resources</h2>
      {DISPLAYED_RESOURCES.map((resource) => {
        return <MainResourceTopic mainResource={resource} />;
      })}
      <div className="trigger-contact-highlight"></div>
      <img
        className="footer-img-overlap"
        alt="adult hugging child"
        src={resourceImg}
      />
    </section>
  );
};

export default Resources;
