const mongo = require('./db/mongo'),
    carts = require('./fixtures/carts');

mongo.connect((error, db) => {
    if (error) throw error;
    var dbo = db.db('shoppingCart');
    carts.forEach(cart => dbo.collection("cartItems").insertOne(cart));
    db.close();
});