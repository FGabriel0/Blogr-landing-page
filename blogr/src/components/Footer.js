import React from "react";
import "./Footer.css";
import logo from "../assets/img/Logo.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer">
          <a class="logo-img" href="#">
            <img class="logo" src={logo} alt="Blogr" />
          </a>
          <ul class="footer-links">
            <li>
              <p class="links-heading">Product</p>
            </li>
            <li>
              <a class="link" href="#">
                Overview
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Marketplace
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Features
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Integrations
              </a>
            </li>
          </ul>
          <ul class="footer-links">
            <li>
              <p class="links-heading">Company</p>
            </li>
            <li>
              <a class="link" href="#">
                About
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Team
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Blog
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Careers
              </a>
            </li>
          </ul>
          <ul class="footer-links">
            <li>
              <p class="links-heading">Connect</p>
            </li>
            <li>
              <a class="link" href="#">
                Contact
              </a>
            </li>
            <li>
              <a class="link" href="#">
                Newsletter
              </a>
            </li>
            <li>
              <a class="link" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div class="user">
          <p>Challenge by FrontMentor
          Coded by <a href="#">Fabio Gabriel &copy 2023</a>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
