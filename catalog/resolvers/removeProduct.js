const mongo = require('../db/mongo'),
    { ObjectId } = require('mongodb');


let remove = productId => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        dbo.collection('products').remove({_id: ObjectId(productId)}, (error, result) => {
            error ? reject(error) : resolve({result: result.result.ok})
        });
    });
});

module.exports = async (_, {productId}) => await remove(productId);