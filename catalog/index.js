const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema/schema.graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});