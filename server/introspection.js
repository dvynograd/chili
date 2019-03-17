const fetch = require('node-fetch');
const { makeRemoteExecutableSchema, introspectSchema } = require('graphql-tools');
const { createHttpLink } = require('apollo-link-http');

module.exports = {
    getIntrospectSchema: async (url) => {
        const makeDatabaseServiceLink = () => createHttpLink({
            uri: url,
            fetch
        });

        const databaseServiceSchemaDefinition = await introspectSchema(makeDatabaseServiceLink());

        return makeRemoteExecutableSchema({
            schema: databaseServiceSchemaDefinition,
            link: makeDatabaseServiceLink()
        });
    }
};