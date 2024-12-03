import { db } from "./_db";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    const connection = await db();
    await connection.execute("DELETE FROM users WHERE id = ?", [id]);
    res.status(200).json({ message: "User deleted!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
