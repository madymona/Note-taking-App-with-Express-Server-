const express = require('express');
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../module/notes');

const router = express.Router();

// Get all notes with o filtering by title, content, and category
router.get('/', (req, res) => {
    const { title, content, category } = req.query;
    let notes = getAllNotes();
    if (title) {
        notes = notes.filter(note => note.title.includes(title));
    }
    if (content) {
        notes = notes.filter(note => note.content.includes(content));
    }
    if (category) {
        notes = notes.filter(note => note.category === category);
    }
    res.json(notes);
});

// Get note by ID
router.get('/:id', (req, res) => {
    const note = getNoteById(parseInt(req.params.id, 10));
    if (note) {
        res.json(note);
    } else {
        res.status(404).send('Note not found');
    }
});

// Create a new note
router.post('/', (req, res) => {
    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        pinned: false,
        favorite: false
    };
    createNote(newNote);
    res.status(201).json(newNote);
});

// Update a note
router.put('/:id', (req, res) => {
    const updatedNote = updateNote(parseInt(req.params.id, 10), req.body);
    if (updatedNote) {
        res.json(updatedNote);
    } else {
        res.status(404).send('Note not found');
    }
});

// Delete a note
router.delete('/:id', (req, res) => {
    const deletedNote = deleteNote(parseInt(req.params.id, 10));
    if (deletedNote) {
        res.status(204).send();
    } else {
        res.status(404).send('Note not found');
    }
});

module.exports = router;
