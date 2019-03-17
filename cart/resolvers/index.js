const cartResolver = require('./cart');

module.exports = {
    Query: {
        cart: cartResolver
    }
};
