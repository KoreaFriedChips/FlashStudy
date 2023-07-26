import { React, useState } from "react";
import logo from "../assets/flashstudy-icon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776;
      </button>
      <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="" />
          <button className="close-btn" onClick={toggleSidebar}>
            &#x2715;
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/flashcards">Your Sets</a>
          </li>
          <li>
            <a href="https://www.timeanddate.com/timer/" target="_blank">
              Timer
            </a>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aalex_xuu/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/KoreaFriedChips">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
