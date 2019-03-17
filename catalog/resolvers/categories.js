const mongo = require('../db/mongo');

let getCategories = () => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        resolve(dbo.collection('categories').find().toArray());
    });
});

module.exports = async () => await getCategories();