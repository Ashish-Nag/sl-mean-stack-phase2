const repo = require('../repositories/user');

exports.getUser = (req, res) => {
    console.log("GET user method called");
    repo.getAll(user => {
        console.log(user);
        res.send(user)
    });
}

exports.postUser = (req, res) => {
    console.log("POST user method called");
    let user = req.body;
    repo.storeUser(user);
    console.log("User stored");
    res.send("User successfully stored");
}