import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div className={style.container}>
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
  );
};

export default Favorites;
