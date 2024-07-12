const validateNote = (req, res, next) => {
    const { title, content, category } = req.body;
    if (title && content && category) {
        next();
    } else {
        res.status(400).send('All fields are required');
    }
};

module.exports = validateNote;
