module.exports = {
    services: [
        {
            name: 'Catalog',
            url: 'http://catalog:3000/graphql'
        }
    ],
    server: {
        port: process.env.port || 4000
    }
};
