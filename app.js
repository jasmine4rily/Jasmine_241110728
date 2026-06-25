const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/", dashboardRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running di http://localhost:${PORT}`);
});
