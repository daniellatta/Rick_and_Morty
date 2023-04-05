import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";

const Nav = ({ onSearch, logout}) => {
  const {pathname} = useLocation();
  if (pathname === '/') return
  return (
    <div className="searchBarContainer">
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Nav;
