import { Link } from "gatsby";
import React from "react";

const NAV_LINKS = [
  { title: "Home", url: "#home" },
  { title: "FAQs", url: "#faqs" },
  { title: "Interviews", url: "#interviews" },
  { title: "Resources", url: "#resources" },
  { title: "Contact", url: "#contact" },
];

const Nav = () => {
  return (
    <div className="Nav">
      {NAV_LINKS.map((link) => {
        return <Link href={link.url}>{link.title}</Link>;
      })}
    </div>
  );
};

export default Nav;
