import React from "react";
import SingleFAQ from "./SingleFAQ.js";
import FAQImage from "../images/upside-down-guy.png";
import { TOPICS } from "../constants/faqInfo";

const FAQs = () => {
  return (
    <div className="FAQs" id="faqs">
      <div className="faq-header-and-image">
        <h2>FAQs</h2>
        <img className="faq-image" alt="faq" src={FAQImage} />
      </div>
      <div className="faq-content">
        {TOPICS.map((topic) => {
          return <SingleFAQ key={`${topic.title}-key`} topic={topic} />;
        })}
      </div>
    </div>
  );
};

export default FAQs;
