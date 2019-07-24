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

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
        Users.findById(id)
        .then(response => {
            if(!response) {
                res.status(401).json({Error: "No user found with that ID"})
            } 
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({Err: err.message});
        })
    
})

server.post('/api/users', (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    if(userInfo.bio && userInfo.name) {
        Users.insert(userInfo)
        .then(user => {
            res.status(201).json({...user,name: userInfo.name, bio: userInfo.bio});
        })
        .catch(err => {
            res.status(500).json({Err: err.message});
        })
    }
})

