import "./styles.css";
import icon from "./img/icon.png";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState("false");
  const showMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div id="header">
        <div className="content">
          <a href="/" className="logo">
            <img src={icon} width="32" alt="logo" /> Course #1
          </a>
          <ul className={isActive ? "menu" : "menu show"}>
            <li>
              <a href="/" className="menuLink">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="menuLink">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="menuLink">
                Contact us
              </a>
            </li>
          </ul>
          <button id="menuResponsive" onClick={showMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
}
