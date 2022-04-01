import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer container-fluid ">
      <div className="row ">
        <div className="col-12 Footer__items">
          <p>@ Cruip.com. All rights reserved.</p>
          <div className="footer__items__right">
            <a target="blank" href="https://github.com/Shivam-dev925">
              <FontAwesomeIcon className="footer__icons" icon={faGithub} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/atheletic-india-058061218/"
            >
              <FontAwesomeIcon className="footer__icons" icon={faLinkedin} />
            </a>
            <a target="blank" href="https://twitter.com/SHIVAMC84334661">
              <FontAwesomeIcon className="footer__icons" icon={faTwitter} />
            </a>
            <a target="blank" href="https://www.instagram.com/chikara6/">
              <FontAwesomeIcon className="footer__icons" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
