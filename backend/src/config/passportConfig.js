const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/userModel');

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ where: { githubId: profile.id } });

        if (!user) {
          user = await User.create({
            githubId: profile.id,
            name: profile.displayName || profile.username,
            email: profile.emails[0]?.value || null,
          });
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
