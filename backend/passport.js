const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "18201546038-uufviqpvqbqck9ohukg429i3ds65mb3m.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user, done) => {
	done(null, user);
})

passport.deserializeUser((user, done) => {
	done(null, user);
})