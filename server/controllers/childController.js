const db = require("../models/userModel");

const childController = {
  //get child_info from child_info table where id of user matches user_id
  getChildren: (req, res, next) => {
    const { users_id } = req.body;
    const text =
      "SELECT c.* FROM users u JOIN child_info c ON c.users_id = u.id WHERE c.users_id = $1";
    const values = [users_id];
    db.query(text, values)
      .then((response) => {
        console.log("get child res:", response.rows);
        if (response.rows) res.locals.children = response.rows;
        else {
          res.locals.children = null;
          console.log(res.locals.children)
        }
        next();
      })
      .catch((err) => {
        next({
          log: "can't find child",
          status: 404,
          message: {
            err: "Error with request to add new child, please review input fields",
          },
        });
      });
  },

  //add child to childrent table on db
  addChild: (req, res, next) => {
    console.log(req.body);
    const {
      child_firstname,
      child_lastname,
      child_nickname,
      birthday,
      gender,
      users_id,
    } = req.body;
    // const user_id = res.locals.newUserId;
    const text =
      "INSERT INTO child_info (child_firstname, child_lastname, child_nickname, birthday, gender, users_id) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
      child_firstname,
      child_lastname,
      child_nickname,
      birthday,
      gender,
      users_id,
    ];
    db.query(text, values)
      .then((response) => {
        console.log("create child res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to add new child, please review input fields",
          },
        });
      });
  },

  //delete child from childrent table on db
  deleteChild: (req, res, next) => {
    const { id } = req.body;
    const text = "DELETE FROM child_info where $1 = id";
    const values = [id];
    db.query(text, values)
      .then((response) => {
        console.log("delete child res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to delete child, please review input fields",
          },
        });
      });
  },

  //update info from child_info table on db
  updateChild: (req, res, next) => {
    //need to make sure that all field are provided when updating, otherwise they will be deleted
    const {
      id,
      child_firstname,
      child_lastname,
      child_nickname,
      birthday,
      gender,
      // users_id
    } = req.body;
    const text =
      "UPDATE child_info SET child_firstname = $1, child_lastname = $2, child_nickname = $3, birthday = $4, gender = $5, WHERE id = $6";
    const values = [
      child_firstname,
      child_lastname,
      child_nickname,
      birthday,
      gender,
      id,
    ];
    db.query(text, values)
      .then((response) => {
        console.log("update child res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to update child's info, please review input fields",
          },
        });
      });
  },
};

module.exports = childController;
