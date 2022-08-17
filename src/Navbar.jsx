import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './css/navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutMe">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;