const mongo = require('../db/mongo'),
    { ObjectId } = require('mongodb');


let addProduct = product => new Promise((resolve, reject) => {
    if (product.categories) {
        product.categories = product.categories.map(categoryId => ObjectId(categoryId));
    }
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        dbo.collection('products').insert(product, (error, result) => {
            error ? reject(error) : resolve({result: result.result.ok})
        });
    });
});

module.exports = async (_, {product}) => await addProduct(product);