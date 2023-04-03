export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div id="Card">
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <h3>{status}</h3>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <h3>{origin.name}</h3>
      <img src={image} alt="" />
    </div>
  );
}
