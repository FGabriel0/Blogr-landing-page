import { useRef, useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { Container } from "../components/sidebar/NavSidebar";
import Sidebar from "./sidebar/Sidebar";
import { FaBars } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";


function Navbar() {

  const dropdownref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);


  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = ()=> setIsActive2(!isActive2);

  const[isActive3, setIsActive3] = useState(false);
  const handleClick3 = () => setIsActive3(!isActive3);


  //Sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="navbar">
        <Link to="#" className="navbar-logo">
          Blogr
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="nav-items">
          <button className="nav-links btn1" onClick={handleClick}>
            Product
          </button>
          <div
            className={`menu ${isActive ? "active" : "inactive"}`}
            ref={dropdownref}
          >
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div> 
        </div>
        <div className="nav-items">
          <button className="nav-links btn2" onClick={handleClick2}>
            Company
          </button>
          <div
            className={`menu ${isActive2 ? "active" : "inactive"}`}
            ref={dropdownref}
          >
            <ul>
              <li>About</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
          
          
        </div>
        <div className="nav-items btn3">
          <button className="nav-links" onClick={handleClick3}>
            Connect
          </button>
          <div
            className={`menu ${isActive3 ? "active" : "inactive"}`}
            ref={dropdownref}
          >
            <ul>
              <li>Contact</li>
              <li>Newslatter</li>
              <li>Linkedln</li>
            </ul>
          </div>
          
          
        </div>
        
        {/* <div className="nav-items">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
            
            >
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                <button className="menu-button" onClick={handleClick}>Product</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="btns">
          <button className="btn1">Login</button>
          <button className="btn2">Sing Up</button>
        </div>
        <Container className="sidebar">
          <FaBars onClick={showSiderbar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
