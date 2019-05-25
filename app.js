const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const viewsPath = __dirname + "/views";

// Serve static files
app.use(express.static(path.join(__dirname, "scripts")));

app.get("/", (req, res) => {
  res.sendFile(viewsPath + "/index.html");
});

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
