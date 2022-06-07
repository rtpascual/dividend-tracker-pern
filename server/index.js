const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mountRoutes = require("./routes");

const port = 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

mountRoutes(app);

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
