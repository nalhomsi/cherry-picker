const { gql } = require('apollo-server-express');
const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		myGarage: [Car]
	}

	type Car {
		image: String
	}

	type Auth {
		token: ID!
		me: User
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
	}
input carInput{
	image: String


}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		addACar (carInfo: carInput): User
	}
`;

module.exports = typeDefs;
