import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const apiKey = "cfce4efb2049.ed84a866813de072a99f";
const Url = "https://be-a-rym.up.railway.app/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);
  const [requestedId, setRequestedId] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "email@gmail.com";
  const PASSWORD = "daniel123";

  const onSearch = (id) => {
    if (requestedId.includes(id)) {
      alert("Esta card ya se esta mostrando en pantalla");
      return;
    }
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setRequestedId((oldIds) => [...oldIds, id]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
    setRequestedId(requestedId.filter((currentId) => currentId !== id));
  };

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} logout={logout} />
      <div className="appContainer">
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/:error404" element={<Error404 />} />
          <Route path="/" element={<Form login={login} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
