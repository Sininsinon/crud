import { db } from "./_db";

export default async function handler(req, res) {
  const connection = await db();
  const [rows] = await connection.query("SELECT * FROM users");
  res.status(200).json(rows);
}
