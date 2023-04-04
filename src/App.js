import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Erro404";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (id in characters.keys) return;
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id, 10))
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <div className="appContainer">
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":" element={<Error404 />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
