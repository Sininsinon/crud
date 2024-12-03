import { db } from "./_db";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, name, email } = req.body;
    const connection = await db();
    await connection.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
    res.status(200).json({ message: "User updated!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
