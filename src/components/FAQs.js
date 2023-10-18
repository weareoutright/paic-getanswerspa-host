import React from "react";

/* HEADERS will eventually be replaced by graphql content from wordpress */
const TOPICS = [
  { title: "COVID", content: "This is about COVID." },
  { title: "FLU", content: "This is about the flu." },
  // { title: "HPV", content: "This is about HPV." },
  // { title: "Meningitis-B", content: "This is about Meningitis-B." },
];

const FAQs = () => {
  return (
    <section className="FAQs">
      {TOPICS.map((topic) => {
        return (
          <div key={topic.title} className="faq-topic">
            {topic.title}
          </div>
        );
      })}
    </section>
  );
};

export default FAQs;
