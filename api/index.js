const express = require('express');
const cors = require('cors');
const routes = require('./routers/routes');
const config = require('./config/mongo');

const server = express();

server.use(cors('*'));
server.use(express.json());
server.use('/api', routes);

server.get('', (req, res) => {
    res.send("backend server file");
});

config.connect();


server.listen(300, () => {
    console.log("server has started");
})
