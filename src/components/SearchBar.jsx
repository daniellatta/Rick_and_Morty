import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={id}
        placeholder="Ingresa un 'id'"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
