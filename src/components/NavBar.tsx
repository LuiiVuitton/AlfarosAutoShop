import "../components/NavBar.css";

import logo from "../assets/AlfaroAutoDetail.png";

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function NavBar({}) {
  return (
    <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="200" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <FaHome />
                {"    "}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                <FaUser />
                {"    "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">
                <FaTools />
                {"    "}
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                <IoIosMail />
                {"    "}
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Links
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/gburgpdr/?igsh=eDIwMHhiZzA2dW53"
                  >
                    <FaSquareInstagram />
                    {"    "}
                    Instagram
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaFacebook />
                    {"    "}
                    Facebook
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaYoutube />
                    {"    "}
                    Youtube
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
