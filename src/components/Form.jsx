import { useState } from "react";
import validate from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    validate(userData.email, userData.password, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <div className="formContainer">
      <div className="form">
        <form>
          <label htmlFor="" className="formLabel">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            placeholder="Enter your email"
            className="formInput"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="" className="formLabel">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Enter your password"
            className="formInput"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <button className="submitButton" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
