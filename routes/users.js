const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../data/users');

const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    const users = getAllUsers();
    res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const user = getUserById(parseInt(req.params.id, 10));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };
    createUser(newUser);
    res.status(201).json(newUser);
});

// Update a user
router.put('/:id', (req, res) => {
    const updatedUser = updateUser(parseInt(req.params.id, 10), req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete a user
router.delete('/:id', (req, res) => {
    const deletedUser = deleteUser(parseInt(req.params.id, 10));
    if (deletedUser) {
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;
