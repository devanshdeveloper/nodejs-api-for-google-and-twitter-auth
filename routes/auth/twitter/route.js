const express = require("express");
const { twitterLite } = require("../../../utils/twitter-auth");
const router = express.Router();

router.get("/request_token", async (req, res) => {
  const clientRedirectURL = req.query.redirect;
  try {
    console.log(clientRedirectURL);
    const results = await twitterLite.getRequestToken(clientRedirectURL);
    const redirectURL =
      "https://api.twitter.com/oauth/authenticate?oauth_token=" +
      results.oauth_token;
    res.json({ redirectURL });
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong" });
  }
});

router.post("/callback", async function (req, res, next) {
  const { oauth_token, oauth_verifier } = req.body;
  const accessTokenResponse = await twitterLite.getAccessToken({
    oauth_verifier,
    oauth_token,
  });
  res.json({ accessTokenResponse });
});

module.exports = router;
