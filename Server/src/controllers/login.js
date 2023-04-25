const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const Found = users.find(
    (user) => user.email === email && user.password === password
  );

  if (Found) return res.json({ access: true });
  return res.status(404).json({ access: false });
};

module.exports = login;
