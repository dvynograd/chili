const { ApolloServer } = require('apollo-server-express'),
    { importSchema } = require('graphql-import'),
    typeDefs = importSchema('./schema/schema.graphql'),
    resolvers = require('./resolvers'),
    config = require('./config'),
    express = require('express'),
    app = express();

const server = new ApolloServer({ typeDefs,  resolvers});
server.applyMiddleware({ app, path: '/graphql' });


app.listen({ port: config.server.port }, () => {
    console.log(`Apollo Server on http://localhost:${config.server.port}/graphql`);
});
