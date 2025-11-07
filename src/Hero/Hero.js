import React, { useState } from "react";
import { ReactComponent as MailIcon } from "../asserts/mail.svg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hero">
      <div className="heroHeader">
        <nav className="nav">
          <div className="navItems">
            <ul className={isOpen ? "open" : ""}>
              <li>Services</li>
              <li>Their Stories</li>
              <li>Our Story</li>
              <li>Varnan</li>
              <li>
                <button className="cntBtn">
                  Let’s Talk
                  <span className="boundingBox">
                    <MailIcon className="mailIcon" />
                  </span>
                </button>
              </li>
            </ul>

            <div className="menu" onClick={toggleMenu}>
              <div className={`bar top ${isOpen ? "open" : ""}`}></div>
              <div className={`bar bottom ${isOpen ? "open" : ""}`}></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
