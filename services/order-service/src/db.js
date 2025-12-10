import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "disara7",
  database: "mfe_orders_db",
});

export default pool;
