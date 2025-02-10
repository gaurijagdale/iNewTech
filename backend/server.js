const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const db = require("./config/db");
const suppliersRoute = require("./routes/suppliers.route");

const { GET_ALL_SUPPLIERS } = require("./queries");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/api/suppliers", (req, res) => {
    db.query(GET_ALL_SUPPLIERS, (err, results) => {
      if (err) {
        console.error("Database Query Failed:", err);
        return res.status(500).json({ error: "Database query failed" });
      }
      res.json(results);
    });
  });

  app.use("/suppliers", suppliersRoute);
  

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});