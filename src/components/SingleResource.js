import React from "react";

const SingleResource = ({ resource }) => {
  return (
    <button className="SingleResource">
      <span className="resource-link">
        {resource.link.length > 0 ? resource.link : <br></br>}
      </span>
      <br />
      <span className="resource-title">{resource.title}</span>
    </button>
  );
};

export default SingleResource;
