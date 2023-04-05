const validate = (user, pass, errors, setErrors) => {
  if (user && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,35}$/.test(user)) {
    setErrors({
      ...errors,
      email: "Ingrese un email valido",
    });
  } else errors.email = "";

  if (pass && !/^(?=.*\d)[a-zA-Z0-9]{6,10}$/.test(pass)) {
    setErrors({
      ...errors,
      password: "Ingresa una contraseña valida",
    });
  } else errors.password = "";
};

export default validate;
