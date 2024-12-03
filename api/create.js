import { db } from "./_db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    const connection = await db();
    await connection.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);
    res.status(201).json({ message: "User created!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
