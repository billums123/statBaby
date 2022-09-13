const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/user/');



//parse request body for POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join( __dirname, 'client/index.html'));
})

//define route handler
app.use('/user', userRouter);

//redirect to 404.html if page does not exist
app.use((req, res) => {
    res.status(404).sendFile(path.join( __dirname, 'client/404.html'));
})

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});


module.exports = app;

// const express = require('express');
// const path = require('path');

// const app = express();

// const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res) => {
//     res.status(404).sendFile(path.join( __dirname, 'client/404.html'));
// })


// app.listen(PORT, () => {
//     console.log(`Server listening on port: ${PORT}...`)
// });
// module.exports = app;
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255),
//     password VARCHAR(255),
//     children_id INT
// );
// CREATE TABLE children (
//     id SERIAL PRIMARY KEY,
//     child_name VARCHAR(255),
//     child_info_id INT
// );
// CREATE TABLE child_info (
//     id SERIAL PRIMARY KEY,
//     birthday DATE,
//     gender VARCHAR(255),
//     length DECIMAL,
//     feedings_id INT,
//     naps_id INT,
//     weights_id INT
// );
// CREATE TABLE feedings (
//     id SERIAL PRIMARY KEY,
//     feeding_start TIMESTAMP,
//     feeding_end TIMESTAMP,
//     type_of_feeding VARCHAR(255)
// );
// CREATE TABLE naps (
//     id SERIAL PRIMARY KEY,
//     "nap_start" TIMESTAMP,
//     "nap_end" TIMESTAMP
//     );
// CREATE TABLE weights (
//     id SERIAL PRIMARY KEY,
//     weight_date DATE,
//     weight DECIMAL
// );

// DROP TABLE users;
// DROP TABLE children;
// DROP TABLE child_info;

// ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("children_id") REFERENCES "children"("id");

// ALTER TABLE "children" ADD CONSTRAINT "children_fk0" FOREIGN KEY ("child_info_id") REFERENCES "child_info"("id");


// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk0" FOREIGN KEY ("feedings_id") REFERENCES "feedings"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk1" FOREIGN KEY ("naps_id") REFERENCES "naps"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk2" FOREIGN KEY ("weights_id") REFERENCES "weights"("id");


