const express = require('express');
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../module/categories');

const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
    const categories = getAllCategories();
    res.json(categories);
});

// Get category by ID
router.get('/:id', (req, res) => {
    const category = getCategoryById(parseInt(req.params.id, 10));
    if (category) {
        res.json(category);
    } else {
        res.status(404).send('Category not found');
    }
});

// Create a new category
router.post('/', (req, res) => {
    const newCategory = {
        id: Date.now(),
        name: req.body.name
    };
    createCategory(newCategory);
    res.status(201).json(newCategory);
});

// Update a category
router.put('/:id', (req, res) => {
    const updatedCategory = updateCategory(parseInt(req.params.id, 10), req.body);
    if (updatedCategory) {
        res.json(updatedCategory);
    } else {
        res.status(404).send('Category not found');
    }
});

// Delete a category
router.delete('/:id', (req, res) => {
    const deletedCategory = deleteCategory(parseInt(req.params.id, 10));
    if (deletedCategory) {
        res.status(204).send();
    } else {
        res.status(404).send('Category not found');
    }
});

module.exports = router;
