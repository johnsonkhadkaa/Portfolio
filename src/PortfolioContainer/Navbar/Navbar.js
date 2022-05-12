import React from "react";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <a href="#">
              <span>M</span>y<span> P</span>rofile{" "}
            </a>
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookMessenger />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookSquare/>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className=""></section>
    </>
  );
};

export default Navbar;
