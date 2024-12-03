import mysql from "mysql2/promise";

export const db = async () => {
  return mysql.createConnection({
    host: process.env.DB_HOST, // Environment Variable
    user: process.env.DB_USER, // Environment Variable
    password: process.env.DB_PASS, // Environment Variable
    database: process.env.DB_NAME, // Environment Variable
  });
};
