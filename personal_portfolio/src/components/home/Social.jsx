import React from "react";

const Social = () => {
  return (
    <div className="home__social">
        {/* instagram link */}
      <a href="https://www.instagram.com/nissanchillin/" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>
      </a>

      {/* github link */}
      <a href="https://github.com/prakritishnissan" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>

      {/* linkedin link */}
      <a href="https://www.linkedin.com/in/prokritish-nissan-249428220/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
