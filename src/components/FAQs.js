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
      { id: 3, question: "Who's the best?", answer: "Anne" },
      { id: 4, question: "Who's the best?", answer: "Jared" },
      { id: 5, question: "Who's the best?", answer: "Darin" },
      { id: 6, question: "Who's the best?", answer: "Kevin" },
      { id: 7, question: "Who's the best?", answer: "Gaby" },
      { id: 8, question: "Who's the best?", answer: "Amanda" },
      { id: 9, question: "Who's the best?", answer: "Emily" },
      { id: 10, question: "Who's the best?", answer: "Antoine" },
      { id: 11, question: "Who's the best?", answer: "Logan" },
      { id: 12, question: "Who's the best?", answer: "Kate" },
      { id: 13, question: "Who's the best?", answer: "Dakota" },
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
