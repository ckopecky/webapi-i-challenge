// implement your API here
const express = require('express');
const server = express();
const Users = require('./data/db');
server.use(express.json());

server.get('/', (req, res) => {
    res.send({Success: "API Sanity Check..."})
})

server.get('/api/users', (req, res) => {
    Users.find()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({Err: err.message});
        })
})

