const mongo = require('../db/mongo'),
    ObjectId = require('mongodb').ObjectID;


let getCartById = (cartId) => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        console.log(cartId);
        if (error) reject(error);
        const dbo = db.db('shoppingCart');
        var carts = dbo.collection('cartItems').findOne({_id: ObjectId(cartId)}).then(
            result => resolve(result)
        );
    });
});

module.exports = async (_, {cart_id}) => await getCartById(cart_id);