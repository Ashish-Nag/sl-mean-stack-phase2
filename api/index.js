const express = require('express');
const routes = require('./routes/routes');

const server = express();

server.get('', (req, res) => {
    res.send("backend server file");
})

server.use('/api/getquestions', routes);

server.listen(300, () => {
    console.log("server has started");
})
