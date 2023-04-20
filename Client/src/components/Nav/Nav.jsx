import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import { CiLogout } from "react-icons/ci";

const Nav = ({ onSearch, logout }) => {
  const { pathname } = useLocation();

  if (pathname === "/") return;

  return (
    <div className={style.container}>
      <div className={style.navLinks}>
        <NavLink to="/home" className={style.navBtns}>
          Home
        </NavLink>
        <NavLink to="/about" className={style.navBtns}>
          About
        </NavLink>
        <NavLink to="/favorites" className={style.navBtns}>
          Favorites
        </NavLink>
      </div>
      <div className={style.searchAndLogout}>
        <SearchBar onSearch={onSearch} />
        <button onClick={logout} className={style.logout}>
          <CiLogout />
        </button>
      </div>
    </div>
  );
};

export default Nav;
