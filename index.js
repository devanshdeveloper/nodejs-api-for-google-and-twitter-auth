// module imports
const express = require("express");
const dotenv = require("dotenv");
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

// router imports
const googleAuthRouter = require("./routes/auth/google/route");
const twitterAuthRouter = require("./routes/auth/twitter/route");

// init app instance
const app = express();
const port = 3000;

// load .env
dotenv.config();

//  required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth/google", googleAuthRouter);
app.use("/auth/twitter", twitterAuthRouter);

const options = {
  key: fs.readFileSync(path.join(__dirname, "certificates/localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "certificates/localhost.pem")),
};

// Create HTTPS server
const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`App listening on https://localhost:${port}`);
});