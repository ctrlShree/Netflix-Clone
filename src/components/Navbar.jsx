import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show && "navbar--scrolled"}`}>
      <div className="navbar__left">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <span className="navbar__link">Home</span>
        <span className="navbar__link">TV Shows</span>
        <span className="navbar__link">Movies</span>
        <span className="navbar__link">New & Popular</span>
        <span className="navbar__link">My List</span>
      </div>
      <div className="navbar__right">
        <span className="navbar__link">🔍</span>
        <img
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </nav>
  );
}

export default Navbar;