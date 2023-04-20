import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const apiKey = "cfce4efb2049.ed84a866813de072a99f";
const Url = "https://be-a-rym.up.railway.app/api/character/";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image } = character;

  return (
    <div>
      <h2>Name | {name}</h2>
      <h4>Status| {status}</h4>
      <h4>Specie |{species}</h4>
      <h4>Gender |{gender}</h4>
      <h4>Origin | {origin?.name}</h4>
      <img src={image} alt="" />
    </div>
  );
};

export default Detail;
