import React, { useState, useEffect } from "react";
import { getSvg } from "../images/svgFiles";

const SingleFAQ = ({ topic }) => {
  const closeTopicBtn = getSvg("close-button");
  const arrowBack = getSvg("arrow-back");
  const arrowForward = getSvg("arrow-forward");

  const [showQuestions, setShowQuestions] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [questionArrow, setQuestionArrow] = useState("arrow-back");
  const [topicArrow, setTopicArrow] = useState("open-button");

  useEffect(() => {}, [showQuestions, showAnswers, questionArrow, topicArrow]);

  return (
    <>
      <div className="faq-content-header">
        <h4>
          {topic.title}
          <button
            onClick={() =>
              setTopicArrow(
                topicArrow === "open-button" ? "close-button" : "open-button"
              )
            }
          >
            <span>{getSvg(topicArrow)}</span>
          </button>
        </h4>
      </div>
      <div key={topic.title} className="faq-topic">
        {topic.content.map((content, index) => {
          return (
            <div className="faq-question">
              {content.question}{" "}
              <button
                onClick={() => {
                  setQuestionArrow(
                    questionArrow === "arrow-back"
                      ? "arrow-forward"
                      : "arrow-back"
                  );
                }}
              >
                <span className={`faq-question-${index}`}>
                  {getSvg(questionArrow)}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleFAQ;
