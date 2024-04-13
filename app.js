const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const PORT = 9090;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Welcome to Find my spot API");
});

const router = require("./apis/routes.js");
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}`);
});
