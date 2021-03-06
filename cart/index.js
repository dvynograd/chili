const { ApolloServer } = require('apollo-server-micro'),
    { importSchema } = require('graphql-import'),
    typeDefs = importSchema('./schema/schema.graphql'),
    resolvers = require('./resolvers');

const apolloServer = new ApolloServer({ typeDefs,  resolvers});
module.exports = apolloServer.createHandler();
