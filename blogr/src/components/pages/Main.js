import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <h2 class="main-title">Designed for the future</h2>

      <div class="first-main-container">
        <div class="txt-card">
          <h3 class="txt-card-title">
            Introducing an <span>extensible editor</span>
          </h3>
          <p class="txt-card-para">
            Blogr features an exceedingly intuitive interface which lets you
            <br />
            focus on one thing: creating content. The editor supports management
            <br />
            of multiple blogs and allows easy manipulation of embeds such as
            <br />
            images, videos, and Markdown. Extensibility with plugins and themes
            <br />
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>

          <h3 class="txt-card-title">
            Robust content
            <span>management</span>
          </h3>
          <p class="txt-card-para">
            Flexible content management enables users to easily move through
            <br />
            posts. Increase the usability of your blog by adding customized
            <br />
            categories, sections, format, or flow. With this functionality,
            <br />
            you're in full control.
          </p>
        </div>

        <div class="img-card-editor"> </div>
      </div>
      {/*
      

      <div class="third-main-contaier">
        <div class="laptop-card-img"></div>
        <div class="laptop-card-txt">
          <h3 class="laptop-card-txt-title">Free, open, simple</h3>
          <p class="laptop-card-txt-para">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3 class="laptop-card-txt-title">Powerful tooling</h3>
          <p class="laptop-card-txt-para">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div> 
      </div>*/}
    </main>
  );
};

export default Main;
