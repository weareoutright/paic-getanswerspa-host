import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState, useEffect } from "react";
import { elementsOverlap } from "../helperFuncs/elementsOverlap";
import { document, window } from "browser-monads";

const NAV_LINKS = [
  { title: "Home", url: "/#home", hash: "/" },
  { title: "FAQs", url: "/#faqs", hash: "faqs" },
  {
    title: "Interviews",
    url: "/#interviews",
    hash: "interviews",
  },
  { title: "Resources", url: "/#resources", hash: "resources" },
  { title: "Contact", url: "/#contact", hash: "contact" },
];

const Nav = () => {
  const [currentElement, setCurrentElement] = useState("");
  const [offset, setOffset] = useState(0);

  const navArea = document.getElementsByClassName("Nav");
  const homeArea = document.getElementsByClassName("Hero");
  const faqArea = document.getElementsByClassName("FAQs");
  const quoteArea = document.getElementsByClassName("Quote");
  const resourcesArea = document.getElementsByClassName("Resources");
  const contactArea = document.getElementsByClassName("covid-resources");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }
  }, []);

  useEffect(() => {
    if (elementsOverlap(navArea, homeArea)) setCurrentElement("Home");
    if (elementsOverlap(navArea, faqArea)) setCurrentElement("FAQs");
    if (elementsOverlap(navArea, quoteArea)) setCurrentElement("Interviews");
    if (elementsOverlap(navArea, resourcesArea)) setCurrentElement("Resources");
    if (elementsOverlap(navArea, contactArea)) setCurrentElement("Contact");
  }, [offset]);

  return (
    <div className="Nav" id="nav">
      <div className="nav-container">
        {NAV_LINKS.map((link) => {
          return (
            <AnchorLink
              key={link.title}
              to={link.url}
              className={link.title === currentElement ? "active" : ""}
              onAnchorLinkClick={() => setCurrentElement(link.title)}
            >
              {link.title}
            </AnchorLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
