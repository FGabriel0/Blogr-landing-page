import React from "react";
import "./SecondMain.css";
import Phone from "../../assets/img/Phone.png"

const SecondMain = () => {
  return (
    <section class="features-middle">
      <div class="features-box">
        <div class="feature-illustration">
        <img src={Phone} alt="phone"/>
        </div>
        <div class="feature">
          <h2 class="secondary-heading">State of the Art Infrastructure</h2>
          <p class="features-text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondMain;
