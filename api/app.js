const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const entryRouter = require("./routers/entry");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({
    title: "Diary App",
    description: "Write your own diary entries"
  });
});

app.use("/entries", entryRouter);

module.exports = app;