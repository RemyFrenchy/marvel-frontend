import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header({ search, setSearch, menu, SetMenu }) {
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
      <input
        type="search"
        placeholder={
          menu === "characters"
            ? "Rechercher un personnage"
            : "Rechercher un comics"
        }
        onChange={(event) => {
          const value = event.target.value;
          setSearch(value);
        }}
        value={search}
      />
    </div>
  );
}
