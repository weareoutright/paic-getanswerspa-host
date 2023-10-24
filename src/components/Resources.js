import React from "react";
import SingleResource from "./SingleResource";
import {
  MAIN_RESOURCES,
  FLU_RESOURCES,
  COVID_RESOURCES,
} from "../constants/resources";

const Resources = () => {
  return (
    <section className="Resources" id="resources">
      <h2>Resources</h2>
      <div className="main-resources">
        {MAIN_RESOURCES.content.map((resource) => {
          return <SingleResource key={resource.id} resource={resource} />;
        })}
      </div>

      <h4>Flu/Influenza</h4>
      <div className="flu-resources">
        {FLU_RESOURCES.content.map((resource) => {
          return <SingleResource key={resource.id} resource={resource} />;
        })}
      </div>

      <h4>Covid-19</h4>
      <div className="covid-resources">
        {FLU_RESOURCES.content.map((resource) => {
          return <SingleResource key={resource.id} resource={resource} />;
        })}
      </div>
    </section>
  );
};

export default Resources;
