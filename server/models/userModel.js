const { Pool } = require('pg');

const PG_URI = ''; 
const credentials = {
    user: "thesterman",
    host: "localhost",
    database: "solodb",
    // password: "yourpassword",
    port: 5432,
  };

  const pool = new Pool(credentials);

  module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  }