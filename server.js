const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const logger = require('./middleware/logger');
const validateNote = require('./middleware/validateNote');

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
const noteRoutes = require('./routes/notes');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');

app.use('/api/notes', validateNote, noteRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Error Handling Middleware
app.use((req, res, next) => {
    res.status(404).send('404: Page Not Found');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
