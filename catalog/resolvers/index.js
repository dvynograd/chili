const mongo = require('../db/mongo');

let getProducts = () => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        resolve(dbo.collection('products').find().toArray());
    });
});

let productsResolver = async () => await getProducts();

let addProduct = product => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        dbo.collection('products').insert(product, (error, result) => {
            error ? reject(error) : resolve(result.result.ok)
        });
    });
});

let addProductResolver = async (_, {product}) => await addProduct(product);

module.exports = {
    Query: {
        products: productsResolver
    },
    Mutation: {
        addProduct: addProductResolver
    }
};
