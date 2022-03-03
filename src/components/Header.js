import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header(search, setSearch) {
  return (
    <div className="header">
      <nav className="navBar">
        <img src={logo} alt="" />
        <div className="linkBar">
          <Link className="link" to="/">
            PERSONNAGES
          </Link>
          <Link className="link" to="/comics">
            COMICS
          </Link>
          <Link className="link" to="/favorites">
            FAVORIS
          </Link>
        </div>
      </nav>
      <input type="search" placeholder="rechercher un personnage" />
    </div>
  );
}
