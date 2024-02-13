const express = require("express");
const { OAuth2Client } = require("google-auth-library");

const router = express.Router();

router.get("/user_details", async (req, res) => {
  const credentials = req.query.credentials;
  const redirectURL = "http://127.0.0.1:3000/oauth";
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectURL
  );
  const ticket = await oAuth2Client.verifyIdToken({
    idToken: credentials,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  console.log("ticket", ticket);
  res.json(ticket);
});

router.get("/discovery-doc", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  const response = await fetch(
    `https://accounts.google.com/.well-known/openid-configuration`
  );
  const data = await response.json();
  // console.log("Discovery Doc", data);

  // Use jwks_uri to get current keys
  const jwtResponse = await fetch(data.jwks_uri);
  const jwtData = await jwtResponse.json();
  // console.log(jwtData);

  res.status(200);
  res.json(keys);
});

module.exports = router;
