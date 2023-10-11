const mongoose = require("mongoose");
const express = require("express");
const app = express();
const config = require("config");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Database connection error : ${err}`));

app.use("/api", require("../backend/routes/image"));

// Listen to Port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
