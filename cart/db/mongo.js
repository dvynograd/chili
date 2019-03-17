const MongoClient = require('mongodb').MongoClient,
    config = require('../config'),
    url = `mongodb://${config.mongo.user}:${encodeURIComponent(config.mongo.password)}`
        + `@${config.mongo.host}:${config.mongo.port}`;

module.exports = new MongoClient(url,  { useNewUrlParser: true });