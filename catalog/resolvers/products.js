const mongo = require('../db/mongo');

let addCategory = categoryId => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        dbo.collection('categories').findOne({_id: categoryId}).then(category => resolve(category));
    });
});

let updateCategories = products => products.map(product => {
    product.categories = product.categories.map(category => addCategory(category));
    return product;
});

let getProducts = () => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        var products = dbo.collection('products').find({}).toArray().then(
            products => resolve(updateCategories(products))
        );
    });
});

module.exports = async () => await getProducts();