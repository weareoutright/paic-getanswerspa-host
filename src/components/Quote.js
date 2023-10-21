import React from "react";

const QUOTE = {
  content:
    "For COVID I say, I got it and I was fine with it. We’ve had a good experience when I personalize it with me and my family, This vaccine is really safe.",
  author: "Dr. Robert Huffard, MD",
  author_info: "Pediatrics specialist in State College, PA",
};

const Quote = () => {
  return (
    <section className="Quote">
      <span></span>
      <p className="quote-content">{QUOTE.content}</p>
      <p className="quote-author">{QUOTE.author}</p>
      <small className="quote-author-info">{QUOTE.author_info}</small>
    </section>
  );
};

export default Quote;
