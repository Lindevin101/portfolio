import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <p1>Devin Lin</p1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="linkedin-handle">
        <a
          href="https://www.linkedin.com/in/lindevin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: www.linkedin.com/in/lindevin
        </a>
      </div>
    </header>
  );
}

export default Header;
