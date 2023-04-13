const validate = (user, pass, errors, setErrors) => {
  if (
    user &&
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,35}$/.test(user)
  ) {
    setErrors({
      ...errors,
      email: "Should have an email structure ej: user@email.com",
    });
  } else if (pass && !/^(?=.*\d)[a-zA-Z0-9]{6,10}$/.test(pass)) {
    setErrors({
      ...errors,
      password: "Should have this structure ej: pass123",
    });
  } else {
    errors.email = "";
    errors.password = "";
  }
};

export default validate;
