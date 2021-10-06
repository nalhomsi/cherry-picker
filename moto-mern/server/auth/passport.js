const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { User } = require('../models');

const options = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.ACCESS_TOKEN_SECRET,
	algortithms: ['RS256'],
};

const strategy = new JwtStrategy(options, (payload, done) => {
	User.findOne({ where: { userId: payload.userId } })
		.then((user) => {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		})
		.catch((err) => done(err, null));
});

module.exports = (passport) => {
	passport.use(strategy);
};
