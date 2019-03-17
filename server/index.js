const express = require('express'),
    app = express(),
    { ApolloServer } = require('apollo-server-express'),
    { mergeSchemas } = require('graphql-tools'),
    { getIntrospectSchema } = require('./introspection'),
    config = require('./config');

(async function () {
    try {

        allSchemas = await Promise.all(config.services.map(service => getIntrospectSchema(service.url)));
        const server = new ApolloServer({ schema: mergeSchemas({ schemas: allSchemas }) });
        server.applyMiddleware({ app, path: '/graphql' });
        app.listen({ port: config.server.port }, () => {
            console.log(`Apollo Server on http://localhost:${config.server.port}/graphql`);
        });

    } catch (error) {
        console.log('ERROR: Failed to grab introspection queries', error);
    }
})();
