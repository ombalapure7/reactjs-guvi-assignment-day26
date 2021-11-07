import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/react-logo.png";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img style={{ height: "3rem" }} src={logo} alt="react-logo" />
        User Management App
      </div>
      <ul className="navbar-links">
        <Link to="/">
          <li>
            Home
            <FaHome className="logo" />
          </li>
        </Link>
        <Link to="/create">
          <li>
            Create
            <IoMdCreate className="logo" />
          </li>
        </Link>
        <Link to="/about">
          <li>
            About
            <FaInfoCircle className="logo" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
