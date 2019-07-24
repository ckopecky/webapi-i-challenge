// implement your API here
const express = require('express');
const server = express();
const Users = require('./data/db');
server.use(express.json());

server.get('/', (req, res) => {
    res.send({Success: "API Sanity Check..."})
})

