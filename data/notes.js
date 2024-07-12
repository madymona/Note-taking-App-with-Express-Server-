const notes = [];

const getAllNotes = () => notes;

const getNoteById = (id) => notes.find(note => note.id === id);

const createNote = (note) => {
    notes.push(note);
    return note;
};

const updateNote = (id, updatedNote) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...updatedNote };
        return notes[index];
    }
    return null;
};

const deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        return notes.splice(index, 1);
    }
    return null;
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
