const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    _id: ID
    make: String
    model: String
    year: String
  }

  type Query {
    cars: [Car]
    car(make: String!): Car
  }
`;

module.exports = typeDefs;