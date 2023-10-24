import { Link } from "gatsby";
import React from "react";

const SingleResource = ({ resource, topic }) => {
  return (
    <form
      className="SingleResourceForm"
      action={resource.link}
      method="get"
      target="_blank"
      rel="noreferrer"
    >
      <button className="SingleResource">
        <span className="resource-link">{topic}</span>
        <br />
        <span className="resource-title">{resource.title}</span>
      </button>
    </form>
  );
};

export default SingleResource;
