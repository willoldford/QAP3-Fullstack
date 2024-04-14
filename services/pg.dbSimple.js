const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dbSimple",
  password: "WO6959wo",
  port: 5432,
});
module.exports = pool;
