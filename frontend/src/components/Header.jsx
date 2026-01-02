import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Header.css';
import logoImage from "../gymImage/ChatGPT_Image_Jul_15__2025__02_52_47_PM-removebg-preview.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">

      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>

      
      <div className="menu-container">
        <div className="menu-icon" onClick={() => setOpen(!open)}>&#9776;</div>
        <ul className={`dropdown ${open ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/food" onClick={() => setOpen(false)}>Food</Link></li>
          <li><Link to="/AskPage" onClick={() => setOpen(false)}>Questions</Link></li>
          <li><Link to="/registration" onClick={() => setOpen(false)}>Register now</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;