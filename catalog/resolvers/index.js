const mongo = require('../db/mongo');

let getProducts = () => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        resolve(dbo.collection('products').find().toArray());
    });
});

let productsResolver = async () => await getProducts();

module.exports = {
    Query: {
        products: productsResolver
    },
};
