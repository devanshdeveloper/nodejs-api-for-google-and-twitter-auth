const TwitterLite = require("twitter-lite");
const dotenv = require("dotenv");
// load .env
dotenv.config();
const twitterConfig = {
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

const twitterLite = new TwitterLite({
  consumer_key: twitterConfig.consumer_key,
  consumer_secret: twitterConfig.consumer_secret,
  access_token_key: twitterConfig.access_token_key,
  access_token_secret: twitterConfig.access_token_secret,
});

module.exports = {
  twitterConfig,
  twitterLite,
};
