import React, { useState, useEffect } from "react";
import { getSvg } from "../images/svgFiles";

const SingleFAQ = ({ topic }) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [topicArrow, setTopicArrow] = useState("open-button");
  const [currentAnswer, setCurrentAnswer] = useState(null);

  useEffect(() => {}, [showQuestions, showAnswers, topicArrow]);

  return (
    <>
      <div className="faq-content-header">
        <h4>
          {topic.title}
          <button
            onClick={() => {
              setTopicArrow(
                topicArrow === "open-button" ? "close-button" : "open-button"
              );
              setShowQuestions(!showQuestions);
            }}
          >
            <span>{getSvg(topicArrow)}</span>
          </button>
        </h4>
      </div>
      <div key={topic.title} className="faq-topic">
        {topic.content.map((content) => {
          return (
            <>
              <div
                className={
                  showQuestions ? "faq-question" : "faq-question-hidden"
                }
              >
                {content.question}{" "}
                <button
                  onClick={() => {
                    setShowAnswers(!showAnswers);
                    setCurrentAnswer(content.id);
                  }}
                >
                  <span>
                    {content.id === currentAnswer && showAnswers
                      ? getSvg("arrow-forward")
                      : getSvg("arrow-back")}
                  </span>
                </button>
              </div>
              <p
                className={
                  showAnswers && content.id === currentAnswer
                    ? "faq-answer"
                    : "faq-answer-hidden"
                }
              >
                {content.answer}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleFAQ;
