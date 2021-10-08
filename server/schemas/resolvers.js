const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Brand {
        _id: ID
        name: String
    }
    
`