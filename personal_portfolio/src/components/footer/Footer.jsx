import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nissan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {/* instagram link */}
          <a
            href="https://www.instagram.com/nissanchillin/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          {/* twitter link */}
          <a
            href="https://twitter.com/PrakritishN"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          {/* facebook link */}
          <a
            href="https://www.facebook.com/prakritish.nissan/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Nissan. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
