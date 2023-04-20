import { useState } from "react";
import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        value={id}
        placeholder='Ingresa un "id"'
        onChange={handleChange}
        className={style.input}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        className={style.searchBtn}
      >
        <FaSearch />
      </button>
    </div>
  );
}
