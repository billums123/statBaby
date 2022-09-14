

// //CREATE DATABASE
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255),
//     password VARCHAR(255),
//     user_firstname VARCHAR(255),
//     user_lastname VARCHAR(255),
//     user_email VARCHAR(255)
// );
// CREATE TABLE children (
//     id SERIAL PRIMARY KEY,
    // child_firstname VARCHAR(255),
    // child_lastname VARCHAR(255),
    // child_nickname VARCHAR(255),
    // users_id INT,
    //     child_info_id INT
    // );
//     CREATE TABLE child_info (
//         id SERIAL PRIMARY KEY,
//         child_firstname VARCHAR(255),
//         child_lastname VARCHAR(255),
//         child_nickname VARCHAR(255),
//         birthday DATE,
//         gender VARCHAR(255),
//         feedings_id INT,
//         naps_id INT,
//         lengths_id INT,
//         weights_id INT,
//         users_id INT
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
// CREATE TABLE lengths (
//     id SERIAL PRIMARY KEY,
//     length_date DATE,
//     length DECIMAL
// );
// CREATE TABLE weights (
//     id SERIAL PRIMARY KEY,
//     weight_date DATE,
//     weight DECIMAL
// );

// //ADD FOREIGN KEYS
// ALTER TABLE "children" ADD CONSTRAINT "children_fk0" FOREIGN KEY ("users_id") REFERENCES "users"("id");
// ALTER TABLE "children" ADD CONSTRAINT "children_fk1" FOREIGN KEY ("child_info_id") REFERENCES "child_info"("id");
// ALTER TABLE "child_info" ADD COLUMN "users_id" INT;
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk0" FOREIGN KEY ("feedings_id") REFERENCES "feedings"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk1" FOREIGN KEY ("naps_id") REFERENCES "naps"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk2" FOREIGN KEY ("lengths_id") REFERENCES "lengths"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk3" FOREIGN KEY ("weights_id") REFERENCES "weights"("id");
// ALTER TABLE "child_info" ADD CONSTRAINT "child_info_fk4" FOREIGN KEY ("users_id") REFERENCES "users"("id");


// //DELETE TABLES
// DROP TABLE users;
// DROP TABLE children;
// DROP TABLE child_info;
// DROP TABLE feedings;
// DROP TABLE naps;
// DROP TABLE lengths;
// DROP TABLE weights;

// //ADD USERS
// INSERT INTO users (username, password, user_firstname, user_lastname, user_email) VALUES ('Mario123', 'pword', 'Luigi', 'Mushroom', 'mking@shroom@gmail.com');
// INSERT INTO users (username, password, user_firstname, user_lastname, user_email) VALUES ('Bowser1234', 'Bpword', 'Bowser', 'Koopa', 'bignscary@shroom.com');
// INSERT INTO users (username, password, user_firstname, user_lastname, user_email) VALUES ('peach-o', 'peach', 'Princess', 'Peach', 'iheartmario@gmail.com');

// //ADD CHILDREN
// INSERT INTO children (child_firstname, child_lastname, child_nickname, users_id) VALUES ('Baby', 'Boy', 'Walter', 2);

// //READ USERS
// SELECT * FROM users;

// //DELETE ALL INFO FROM DB
// DELETE FROM users;
// DELETE FROM children;
// DELETE FROM child_info;
// DELETE FROM feedings;
// DELETE FROM naps;
// DELETE FROM lengths;
// DELETE FROM weights;

