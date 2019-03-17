module.exports = {
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        user: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD
    },
    server: {
        port: process.env.port || 4000
    }
};
