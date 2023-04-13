import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch, logout }) => {
  const { pathname } = useLocation();
  if (pathname === "/") return;
  return (
    <div className={style.container}>
      <NavLink to="/home" className={style.navBtns}>
        Home
      </NavLink>
      <NavLink to="/about" className={style.navBtns}>
        About
      </NavLink>
      <NavLink to="/favorites" className={style.navBtns}>
        Favorites
      </NavLink>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Nav;
