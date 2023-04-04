import SearchBar from "./SearchBar";

const Nav = ({ onSearch }) => {
  return (
    <div className="searchBarContainer">
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
