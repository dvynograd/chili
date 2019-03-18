const mongo = require('../db/mongo');

let addCategory = category => new Promise((resolve, reject) => {
    mongo.connect((error, db) => {
        if (error) reject(error);
        const dbo = db.db('catalog');
        dbo.collection('categories').insert(category, (error, result) => {
            error ? reject(error) : resolve(({result: result.result.ok}))
        });
    });
});

module.exports = async (_, {category}) => await addCategory(category);