const db = require("../models/userModel");

const childController = {
  //add child to childrent table on db
  addChild: (req, res, next) => {
    const { child_firstname, child_lastname, child_nickname } = req.body;
    const text =
      "INSERT INTO children (child_firstname, child_lastname, child_nickname) VALUES ($1, $2, $3)";
    const values = [child_firstname, child_lastname, child_nickname];
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
    const text = "DELETE FROM children where $1 = id";
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


//   addChild: (req, res, next) => {},
};

module.exports = childController;
