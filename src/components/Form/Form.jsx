import { useState } from "react";
import validate from "../validation";
import style from "./Form.module.css"

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    validate(userData.email, userData.password, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <form>
          <label htmlFor="" className={style.label}>
            Email
          </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            placeholder="Enter your email"
            className={style.input}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="" className={style.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Enter your password"
            className={style.input}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <button className={style.button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
