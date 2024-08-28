const { Pool } = require("pg");

const pool = new Pool({
  user: "poastgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "postgress",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
