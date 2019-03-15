const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema/schema.graphql');

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        products: () => {
            return [
                {
                    id: 1,
                    sku: 'sku-1',
                    name: 'Product #1',
                    short_description: 'Test Short Description #1',
                    price: 99.99,
                    image: 'https://www.gstatic.com/webp/gallery3/1.png',
                    url: '/sku-1',
                    categories: () => ([
                        {
                            id: 1,
                            title: 'phones',
                            url: '/phones'
                        },
                        {
                            id: 1,
                            title: 'iphone',
                            url: '/phones/iphone'
                        },

                    ])
                },
                {
                    id: 2,
                    sku: 'sku-2',
                    name: 'Product #2',
                    short_description: 'Test Short Description #2',
                    price: 99.99,
                    image: 'https://www.gstatic.com/webp/gallery3/2.png',
                    url: '/sku-1',
                    categories: () => ([
                        {
                            id: 1,
                            title: 'phones',
                            url: '/phones'
                        },
                        {
                            id: 1,
                            title: 'iphone',
                            url: '/phones/iphone'
                        },

                    ])
                }
            ]
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});