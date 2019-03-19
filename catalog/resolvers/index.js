const productsResolver = require('./products'),
    addProductResolver = require('./addProduct'),
    categoriesResolver = require('./categories'),
    addCategoryResolver = require('./addCategory'),
    removeProductResolver = require('./removeProduct');

module.exports = {
    Query: {
        products: productsResolver,
        categories: categoriesResolver
    },
    Mutation: {
        addProduct: addProductResolver,
        addCategory: addCategoryResolver,
        removeProduct: removeProductResolver,
    }
};
