import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

const express = require('express');
const {resolve} = require('path');
const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use('/',
    express.static(
        resolve(
            __dirname,
            './build'
        )
    )

)
app.listen(process.env.PORT || 3000, (err) => {
    if(err) {
        return console.log(err)
    }

    console.log('Nutep Frontend started....')
})