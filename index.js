const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8082;

app.use(express.json({ extended: true }));
app.use(cors());
app.set("port", PORT);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function start() {
  try {
    app.use("/", require("./routes/route"));

    app.use("*", (req, res, next) => {
      req.xhr
        ? res.status(500).send({ message: "Some undefined error" })
        : res.status(404).send({ error: "Not found" });
    });

    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server error:", e);
    process.exit(1);
  }
}

start();
