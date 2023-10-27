import React from "react";
import { PAIC_INFO } from "../constants/paicInfo";

const Footer = () => {
  return (
    <section className="Footer" id="contact">
      <div className="footer-content">
        <div className="contact-info">
          <p className="site-name">{PAIC_INFO.siteName}</p>
          <p className="contact">Contact: {PAIC_INFO.contact}</p>
        </div>
        <div className="organizational-info">
          <div className="branding-images">
            <img alt="PAIC logo" src={PAIC_INFO.logo} />
            <img alt="Chapter info" src={PAIC_INFO.chapter} />
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} | {PAIC_INFO.orgName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
