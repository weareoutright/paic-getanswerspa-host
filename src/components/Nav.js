import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useEffect, useState } from "react";

// import { window, document } from "browser-monads";

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
  const [currentElement, setCurrentElement] = useState("Home");

  return (
    <div className="Nav">
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
