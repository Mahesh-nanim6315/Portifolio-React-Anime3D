import React, { useState } from "react";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./images/sky-nat.png" alt="Logo" />

          <ul>
            <li><a href="#" className="menu-item">Home</a></li>
            <li><a href="#" className="menu-item">Skills</a></li>
            <li><a href="#" className="menu-item">Work Experience</a></li>
            <li><a href="#" className="menu-item">Contact Me</a></li>
            <button className="contact-btn" onClick={()=>{}}>
              Hire Me
              </button>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
                <span 
                class={"material-symbols-outlined"}
                  
                  style={{fontSize:"1.0rem"}}
              
                    >
                      {openMenu ? "close" : ""}
                    
                </span>

               </button>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
  
  
  
