import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState, useEffect } from "react";
import { elementsOverlap } from "../helperFuncs/elementsOverlap";
import { document, window } from "browser-monads-ts";

const NAV_LINKS = [
  { title: "Home", url: "/#home", hash: "/", className: "home-nav" },
  { title: "FAQs", url: "/#faqs", hash: "faqs", className: "faqs-nav" },
  {
    title: "Interviews",
    url: "/#interviews",
    hash: "interviews",
    className: "interviews-nav",
  },
  {
    title: "Resources",
    url: "/#resources",
    hash: "resources",
    className: "resources-nav",
  },
  {
    title: "Contact",
    url: "/#contact",
    hash: "contact",
    className: "contact-nav",
  },
];

const Nav = () => {
  const [currentElement, setCurrentElement] = useState("");
  const [offset, setOffset] = useState(0);
  const [navBackground, setNavBackground] = useState("Nav");

  const nav = document.getElementsByClassName("Nav");
  const homeArea = document.getElementsByClassName("Hero");
  const faqArea = document.getElementsByClassName("FAQs");
  const quoteArea = document.getElementsByClassName("Quote");
  const resourcesArea = document.getElementsByClassName("Resources");
  const contactArea = document.getElementsByClassName(
    "trigger-contact-highlight"
  );

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.scrollY);
      };
    }
  }, []);

  useEffect(() => {
    if (elementsOverlap(nav, homeArea)) {
      setCurrentElement("Home");
      setNavBackground("Nav nav-dark-teal");
    }

    if (elementsOverlap(nav, faqArea)) {
      setCurrentElement("FAQs");
      setNavBackground("Nav nav-purple");
    }

    if (elementsOverlap(nav, quoteArea)) {
      setCurrentElement("Interviews");
      setNavBackground("Nav nav-pink");
    }

    if (elementsOverlap(nav, resourcesArea)) {
      setCurrentElement("Resources");
      setNavBackground("Nav nav-peach");
    }

    if (elementsOverlap(nav, contactArea)) {
      setCurrentElement("Contact");
      setNavBackground("Nav nav-peach");
    }
  }, [offset]);

  return (
    <div className={navBackground} id="nav">
      <div className="nav-container">
        {NAV_LINKS.map((link) => {
          return (
            <AnchorLink
              key={link.title}
              to={link.url}
              className={
                link.title === currentElement
                  ? `active ${link.className}`
                  : `${link.className}`
              }
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
