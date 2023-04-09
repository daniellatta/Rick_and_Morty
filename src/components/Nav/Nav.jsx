import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch, logout }) => {
  const { pathname } = useLocation();
  if (pathname === "/") return;
  return (
    <div className={style.container}>
      <button className={style.button}>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button className={style.button}>
        <NavLink to="/about">About</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Nav;
