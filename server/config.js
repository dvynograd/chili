module.exports = {
    services: [
        {
            url: 'http://catalog:3000/graphql'
        },
        {
            url: 'http://cart:3000/graphql'
        }
    ],
    server: {
        port: process.env.port || 4000
    }
};
