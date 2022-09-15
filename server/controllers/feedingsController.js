const db = require("../models/userModel");

const feedingsController = {
  //add feeding to feedings table on db
  addFeeding: (req, res, next) => {
    console.log(req.body)
    const {
      feeding_start,
      feeding_end,
      child_info_id
    } = req.body;
    const text =
      "INSERT INTO feedings (feeding_start, feeding_end, child_info_id) VALUES ($1, $2, $3)";
    const values = [
      feeding_start,
      feeding_end,
      child_info_id
    ];
    db.query(text, values)
      .then((response) => {
        console.log("create feeding log res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with adding new feeding, please review input fields",
          },
        });
      });
  },

  //get get_feedings from get_feedings table where id of feedings.child_info_id matches child_info.id
  getFeedings: (req, res, next) => {
    const { child_info_id } = req.body;
    const text =
      "SELECT f.feeding_start, f.feeding_end, f.id FROM child_info c  RIGHT OUTER JOIN feedings f ON f.child_info_id = $1" 
    const values = [child_info_id];
    db.query(text, values)
      .then((response) => {
        console.log('resy', response.rows)
        res.locals.feedings = response.rows;
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to getFeeding info, please review input fields",
          },
        });
      });
  },


  //delete child from childrent table on db
  deleteFeeding: (req, res, next) => {
    const { id } = req.body;
    console.log('id', id)
    const text = "DELETE FROM feedings where id = $1";
    const values = [id];
    db.query(text, values)
      .then((response) => {
        console.log("delete feedings res:", response);
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

  // //update info from child_info table on db
  // updateChild: (req, res, next) => {
  //   //need to make sure that all field are provided when updating, otherwise they will be deleted
  //   const {
  //     id,
  //     child_firstname,
  //     child_lastname,
  //     child_nickname,
  //     birthday,
  //     gender,
  //     users_id
  //   } = req.body;
  //   const text =
  //     "UPDATE child_info SET child_firstname = $1, child_lastname = $2, child_nickname = $3, birthday = $4, gender = $5";
  //   const values = [child_firstname, child_lastname, child_nickname, birthday, gender];
  //   db.query(text, values)
  //     .then((response) => {
  //       console.log("update child res:", response);
  //       next();
  //     })
  //     .catch((err) => {
  //       next({
  //         status: 404,
  //         message: {
  //           err: "Error with request to update child's info, please review input fields",
  //         },
  //       });
  //     });
  // },
};

module.exports = feedingsController;
