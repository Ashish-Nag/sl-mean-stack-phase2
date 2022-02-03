const mongo = require('mongodb');

const url = "mongodb+srv://test:test@cluster0.qfhn4.mongodb.net/exam-app?retryWrites=true&w=majority"

const mongoClient = mongo.MongoClient;

var dbClient;

exports.connect = () => {
    mongoClient.connect(url)
        .then((client) => {
            dbClient = client;
            console.log("MongoDb Connected");
        })
        .catch(e => console.log(e));
}

exports.getCollection = (name) => {
    return dbClient.db('exam-app').collection(name);
}