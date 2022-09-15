const db = require("../models/userModel");
const path = require("path");
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
        // console.log(response);
        // res.locals.newUser = response;
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
    const text = "SELECT password, id FROM users WHERE username = $1";
    const values = [username];
    db.query(text, values)
    .then((response) => {
        //no encrypting currently, just checks for a match of username and password, look at later if time allows
        response.rows.forEach(user => {
            if(password === user.password) {
                res.locals.id = user.id;
                console.log('success!')
            }
        });
        if(!res.locals.id) {
            //Still need to do something if user/password are incorrect
            // res.locals.failedToLogin = true;
            console.log('Username or password are incorrect!');
            res.locals.id(null); //if password/username doesn't work, set ID to null
            // res.redirect(path.resolve(__dirname,'../../client/404.html'))
        }
        next();
    })
    .catch((err) => {
      next({
        status: 404,
        message: {
          err: "Error with request to login, please review input fields",
        },
      });
    });
},
};

module.exports = userController;
