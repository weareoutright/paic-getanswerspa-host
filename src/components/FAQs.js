import React from "react";

/* HEADERS will eventually be replaced by graphql content from wordpress */
const HEADERS = [
  { title: "Covid", content: "This is about COVID." },
  { title: "Flu", content: "This is about the flu." },
  { title: "HPV", content: "This is about HPV." },
  { title: "Meningitis-B", content: "This is about Meningitis-B." },
];

const FAQs = () => {
  return (
    <section className="FAQs">
      {HEADERS.map((illness) => {
        <div key={illness} className="faq-illness">
          <content></content>
        </div>;
      })}
    </section>
  );
};

export default FAQs;
