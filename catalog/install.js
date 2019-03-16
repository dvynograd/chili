const mongo = require('./db/mongo'),
    products = require('./fixtures/products');

mongo.connect((error, db) => {
    if (error) throw error;
    var dbo = db.db('catalog');
    dbo.createCollection('products');
    products.forEach(product => dbo.collection("products").insertOne(product));
    db.close();
});