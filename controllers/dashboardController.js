const path = require("path");
exports.dashboard = (req, res) => {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    return res.sendFile(path.join(__dirname, "../admin.html"));
  } else {
    return res.sendFile(path.join(__dirname, "../guest.html"));
  }
};

exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, "../login.html"));
};
