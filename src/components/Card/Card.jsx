import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const { pathname } = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <div className={style.btnContainer}>
        <button onClick={handleFavorite} className={style.heart}>
          {isFav ? "❤️" : "🤍"}
        </button>
        {pathname !== "/favorites" && (
          <button
            onClick={() => {
              onClose(id);
            }}
            className={style.closeButton}
          >
            x
          </button>
        )}
      </div>

      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h3>{status}</h3>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <h3>{origin.name}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
