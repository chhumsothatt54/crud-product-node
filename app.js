
const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config();
const product = require('./routes/index');

app.use(product);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
