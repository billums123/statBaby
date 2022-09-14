const db = require("../models/userModel");
const userController = {
  createNewUser: (req, res, next) => {
    const { username, password, user_firstname, user_lastname, user_email } =
      req.body;
    const text =
      "INSERT INTO users (username, password, user_firstname, user_lastname, user_email) VALUES ($1, $2, $3, $4, $5)";
    const values = [
      username,
      password,
      user_firstname,
      user_lastname,
      user_email,
    ];
    db.query(text, values)
      .then((response) => {
        console.log(response);
        res.locals.newUser = response;
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to make new user, please review input fields",
          },
        });
      });
  },

  verifyUser: (req, res, next) => {
    const { username, password } = req.body;
    const text = "SELECT password FROM users WHERE username = $1";
    const values = username;
    db.query(text, values)
    .then((response) => {
        console.log('Login Response', response);
    })
  },
};

module.exports = userController;
