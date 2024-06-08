const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(cors());
const rentBook = require("./routes/rentBook");

// connect to DB
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q4obhxr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Successful"))
  .catch((err) => console.log(err));

// routes for book
app.use("/api/rent-book", rentBook);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
