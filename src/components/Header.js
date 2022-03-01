import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navBar">
      <img src={logo} alt="" />
      <Link className="link" to="/">
        Personnages
      </Link>
      <Link className="link" to="/comics">
        Comics
      </Link>
      <Link className="link" to="/favorites">
        Favoris
      </Link>
    </nav>
  );
}
