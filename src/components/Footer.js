import "./Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      Made with
      <span className="heart">
        <FaHeart />
      </span>
      by Om Balapure
    </footer>
  );
}

export default Footer;
