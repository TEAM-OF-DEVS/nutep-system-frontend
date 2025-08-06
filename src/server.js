const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Servir os arquivos da build do React
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Porta dinâmica para Heroku
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
