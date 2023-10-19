import React from "react";
import SingleFAQ from "./SingleFAQ";
import FAQImage from "../images/upside-down-guy.png";

const TOPICS = [
  {
    title: "FLU/INFLUENZA",
    content: [
      { question: "Who's the best?", answer: "Grace" },
      { question: "Who's the best?", answer: "Grace" },
      { question: "Who's the best?", answer: "Grace" },
    ],
  },
  {
    title: "COVID",
    content: [
      { question: "Who's the best?", answer: "Grace" },
      { question: "Who's the best?", answer: "Grace" },
      { question: "Who's the best?", answer: "Grace" },
    ],
  },
];

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
