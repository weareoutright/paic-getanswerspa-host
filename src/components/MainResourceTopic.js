import React from "react";
import SingleResource from "./SingleResource";

const MainResourceTopic = ({ mainResource }) => {
  return (
    <>
      <h4>{mainResource.title}</h4>
      <div className={`main-resources ${mainResource.title}`}>
        {mainResource.content.map((resource) => {
          return (
            <SingleResource
              key={resource.id}
              resource={resource}
              topic={resource.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainResourceTopic;
