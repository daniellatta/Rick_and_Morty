import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/action";
import { useState } from "react";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.filters}>
        <select onChange={handleOrder} className={style.selector}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} className={style.selector}>
          <option value="allCharacters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={style.cardContainer}>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              status={fav.status}
              species={fav.species}
              gender={fav.gender}
              origin={fav.origin}
              image={fav.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
