const mongodb = require('../config/mongo');

exports.getAll = (cb) => {
    const collection = mongodb.getCollection('user');

    collection.find().toArray()
        .then((user) => {
            cb(user);
        })
        .catch(e => console.log(e));
}

exports.storeUser = (user) => {
    const collection = mongodb.getCollection('user');
    collection.insertOne(user)
        .then(res => console.log("record stored"))
        .catch(err => console.log(err));
}