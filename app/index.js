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

  res.json({
    message:
      'FullCycle Rocks! Para adicionar um nome, faça um request POST para / passando { name: "Teste" }.',
    names,
  });
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
