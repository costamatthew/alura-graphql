const { ApolloServer, gql } = require('Apollo-server')

const users = [
  { 
    name: 'Ana',
    ativo: true
  },
  { 
    name: 'Marcia',
    ativo: false
  }
]

const typeDefs = gql `
  type User {
    nome: String!
    ativo: Boolean!
    email: String!
  }
`

const server = new ApolloServer({ typeDefs, resolvers })
