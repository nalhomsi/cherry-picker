const { gql } = require('apollo-server-express');
const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
	}

	type Car {
		_id: ID
		make: String
		model: String
		year: String
	}

	type Auth {
		token: ID!
		me: User
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
		cars: [Car]
		car(make: String!): Car
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
