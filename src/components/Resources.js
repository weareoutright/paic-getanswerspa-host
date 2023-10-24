import React from "react";
import SingleResource from "./SingleResource";
import {
  MAIN_RESOURCES,
  FLU_RESOURCES,
  COVID_RESOURCES,
} from "../constants/resourcesInfo";
import resourceImg from "../images/adult-hugging-child.png";

const Resources = () => {
  return (
    <section className="Resources" id="resources">
      <h2>Resources</h2>
      <div className="main-resources">
        {MAIN_RESOURCES.content.map((resource) => {
          return (
            <SingleResource
              key={resource.id}
              resource={resource}
              topic={MAIN_RESOURCES.title}
            />
          );
        })}
      </div>

      <h4>Flu/Influenza</h4>
      <div className="flu-resources">
        {FLU_RESOURCES.content.map((resource) => {
          return (
            <SingleResource
              key={resource.id}
              resource={resource}
              topic={FLU_RESOURCES.title}
            />
          );
        })}
      </div>

      <h4>Covid-19</h4>
      <div className="covid-resources">
        {COVID_RESOURCES.content.map((resource) => {
          return (
            <SingleResource
              key={resource.id}
              resource={resource}
              topic={COVID_RESOURCES.title}
            />
          );
        })}
      </div>

      <img
        className="footer-img-overlap"
        alt="adult hugging child"
        src={resourceImg}
      />
    </section>
  );
};

export default Resources;
