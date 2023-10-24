import React from "react";
import logo from "../images/paic-logo.png";
import chapter from "../images/PAAAP_1.png";

const Footer = () => {
  return (
    <section className="Footer" id="contact">
      <div className="footer-content">
        <div className="contact-info">
          <p className="site-name">GETANSWERPA.ORG</p>
          <p className="contact">Contact: email@emailaddress.com</p>
        </div>
        <div className="organizational-info">
          <div className="branding-images">
            <img alt="PAIC logo" src={logo} />
            <img alt="Chapter info" src={chapter} />
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} | Pennsylvania Immunization Coalition
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
