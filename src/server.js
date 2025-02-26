const express = require("express");
const {resolve} = require("path");
require('dotenv').config();

const app = express();

// Servir os arquivos da build do React
app.use('/',
express.static(
    resolve(
        __dirname,
        './build'
        )
    )
)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Porta dinâmica para Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});