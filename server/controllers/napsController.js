const db = require("../models/userModel");

const napsController = {
  //add feeding to feedings table on db
  addNap: (req, res, next) => {
    console.log(req.body)
    const {
      nap_start,
      nap_end,
      child_info_id
    } = req.body;
    const text =
      "INSERT INTO naps (nap_start, nap_end, child_info_id) VALUES ($1, $2, $3)";
    const values = [
      nap_start,
      nap_end,
      child_info_id
    ];
    db.query(text, values)
      .then((response) => {
        console.log("create nap log res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with adding new nap, please review input fields",
          },
        });
      });
  },

  //get get_feedings from get_feedings table where id of feedings.child_info_id matches child_info.id
  getNaps: (req, res, next) => {
    const { child_info_id } = req.body;
    const text =
      "SELECT n.nap_start, n.nap_end, n.id FROM naps n WHERE n.child_info_id = $1" 
    const values = [child_info_id];
    db.query(text, values)
      .then((response) => {
        // console.log('resy', response.rows)
        res.locals.naps = response.rows;
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to getnap info, please review input fields",
          },
        });
      });
  },


  //delete child from childrent table on db
  deleteNap: (req, res, next) => {
    const { id } = req.body;
    console.log('id', id)
    const text = "DELETE FROM naps where id = $1";
    const values = [id];
    db.query(text, values)
      .then((response) => {
        console.log("delete naps res:", response);
        next();
      })
      .catch((err) => {
        next({
          status: 404,
          message: {
            err: "Error with request to delete nap, please review input fields",
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

module.exports = napsController;
