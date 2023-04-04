import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className="searchBarContainer">
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
