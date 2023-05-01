import React from "react";
import "./ThirdMain.css";
import laptop from "../../assets/img/laptop.png"

const ThirdMain = () => {
  return (
    <section class="features-bottom">
      <div class="features">
        <div class="illustration-box">
            <img className="illustration" src={laptop} alt=""/>
        </div>
        <div class="features-box">
          <div class="feature">
            <h3 class="tertiary-heading">Free, open, simple</h3>
            <p class="features-text">
              Blogr is a free and open source application backed by a large<br/>
              community of helpful developers. It supports features such as code<br/>
              syntax highlighting, RSS feeds, social media integration,<br/>
              third-party commenting tools, and works seamlessly with Google<br/>
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div class="feature">
            <h3 class="tertiary-heading">Powerful tooling</h3>
            <p class="features-text">
              Batteries included. We built a simple and straightforward CLI tool<br/>
              that makes customization and deployment a breeze, but capable of<br/>
              producing even the most complicated sites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdMain;
