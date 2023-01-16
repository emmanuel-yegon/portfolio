import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/emmanuel-yegon-4b382324b/"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/emmanuel-yegon"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://twitter.com/mankiptoo_yegon"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-twitter"></i>
      </a>
    </div>
  );
}

export default Social