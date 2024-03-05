const express = require("express");
const mysql = require("mysql2/promise");

const PORT = 3333;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const select = `select name from people`;

  const connection = await mysql.createConnection({
    host: "node-db",
    user: "root",
    password: "root",
    database: "node_database",
  });

  const result = await connection.query(select);
  const names = result[0].map((reg) => {
    return reg.name;
  });
  const namesList = names.map((name) => `<li> ${name} </li>`).join(" ");

  res.send(`
    <h1> Hello FullCycle!</h1>
    <ul> ${namesList} </ul>
  `);
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  const insert = `insert into people(name) values("${name}")`;

  const connection = await mysql.createConnection({
    host: "node-db",
    user: "root",
    password: "root",
    database: "node_database",
  });

  await connection.query(insert);

  res.json({ message: "Registro criado com sucesso" });
});

app.listen(PORT, () => {
  console.log("Server running on port" + PORT);
});
