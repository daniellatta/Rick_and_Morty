import { Link } from "react-router-dom";
import style from "./Card.module.css"

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
  return (
    <div className={style.card}>
      <div className={style.btnContainer}>
        <button onClick={() => {onClose(id)}}className={style.button}>x</button>
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
