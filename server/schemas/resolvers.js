const { AuthenticationError } = require('apollo-server-express');
const { Car, User } = require('../models');
const { signToken } = require('../utils/auths');
const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			console.log(context.user);
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					'-__v -password'
				);
				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		cars: async (parent, { make }) => {
			return Car.findOne({ make });
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		login: async (parents, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}
			const token = signToken(user);
			return { token, user };
		},
	},
};
module.exports = resolvers;
