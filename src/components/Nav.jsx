import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const hideNavBar = () => {
    if (window.scrollTo > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideNavBar);
    return () => {
      window.removeEventListener("scroll", hideNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        ></img>
        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="Netflix Avatar"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
