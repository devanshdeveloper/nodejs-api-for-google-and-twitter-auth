# NODE.JS APIS FOR HANDLING AUTH TOKENS FOR GOOGLE AND TWITTER

## GOOGLE API ROUTES

### /auth/google/user_details?credentials=

response example :

```json
{
  "envelope": {
    "alg": "RS256",
    "kid": "ed806f1842b588054b18b669dd1a09a4f367afc4",
    "typ": "JWT"
  },
  "payload": {
    "iss": "https://accounts.google.com",
    "azp": "1076593951754-gfl79s0m4nj1832tjs14s90hjba2c06h.apps.googleusercontent.com",
    "aud": "1076593951754-gfl79s0m4nj1832tjs14s90hjba2c06h.apps.googleusercontent.com",
    "sub": "106095948949796852082",
    "email": "devanshkhetwani@gmail.com",
    "email_verified": true,
    "nbf": 1707812215,
    "name": "Devansh Khetwani",
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocKjToIReJ28lzTaZ0vT7XqibjqAnaxye3AW9Dwa81v4PyM=s96-c",
    "given_name": "Devansh",
    "family_name": "Khetwani",
    "locale": "en-GB",
    "iat": 1707812515,
    "exp": 1707816115,
    "jti": "0786ae8486d521b377610591c35ad6c167839374"
  }
}
```

## TWITTER API ROUTES

### /auth/twitter/request_token?redirect=

NOTE: redirect url should be included in apps settings

example: response

```json
{
    "redirectURL": "https://api.twitter.com/oauth/authenticate?oauth_token=PDGDAwAAAAABrWgnAAABjaGgHVQ"
}
```



### /auth/twitter/callback

example body
```json
{
    "oauth_token": "YSWQGwAAAAABrWgnAAABjaGXMLU",
    "oauth_verifier": "gNvaTp96ACCLQTZAEkSC9O6orhmkjfwA"
}
```

example response:

```json
{
  "accessTokenResponse": {
    "oauth_token": "1256161349878587394-u1SzJWTAgCeqFS9JyJ65wqnVIgICmG",
    "oauth_token_secret": "GYK8uXi73CMfLpCp7xFueh5cHF7fNXOSNYLfhaZuJle4E",
    "user_id": "1256161349878587394",
    "screen_name": "devanshdevelop"
  }
}
```