const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(cors());
app.use("/", require("./routes/route"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT}...`);
});
