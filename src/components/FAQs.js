import React from "react";
import SingleFAQ from "./SingleFAQ";
import FAQImage from "../images/upside-down-guy.png";

const TOPICS = [
  {
    title: "FLU/INFLUENZA",
    content: [
      { id: 0, question: "Who's the best?", answer: "Grace" },
      { id: 1, question: "Who's the best?", answer: "Kelsey" },
      { id: 2, question: "Who's the best?", answer: "Sarah" },
      { id: 3, question: "Who's the best?", answer: "Dakota" },
    ],
  },
  {
    title: "COVID",
    content: [
      { id: 0, question: "Who's the best?", answer: "Grace" },
      { id: 1, question: "Who's the best?", answer: "Kelsey" },
      { id: 2, question: "Who's the best?", answer: "Sarah" },
      { id: 3, question: "Who's the best?", answer: "Dakota" },
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
