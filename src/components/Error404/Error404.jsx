import style from "./Error404.module.css"

const Error404 = () => {
  return (
    <div className={style.error404}>
      <h1>Error 404</h1>
      <h2>This page does not exit, please enter a valid route</h2>
    </div>
  );
};

export default Error404