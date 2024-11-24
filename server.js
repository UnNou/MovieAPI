import express from 'express';

const app = express();

// Middleware to parse JSON in POST requests
app.use(express.json());

// Raw Endpoints

// GET / - A simple welcome endpoint
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Movie API!');
});

// GET /movies - Get all movies
app.get('/movies', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'The Matrix', year: 1999, genre: 'Sci-Fi' },
        { id: 2, name: 'The Godfather', year: 1972, genre: 'Drama' },
        { id: 3, name: 'Die Hard', year: 1988, genre: 'Action' }
    ]);
});

// POST /movies - Add a new movie
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    res.status(201).json({
        message: 'Movie added successfully',
        movie: newMovie
    });
});

// GET /customers - Get all customers
app.get('/customers', (req, res) => {
    res.status(200).json([
        { id: 1, first_name: 'Unnq', last_name: 'Nousiainen', username: 'Noun' },
        { id: 2, first_name: 'Matti', last_name: 'Matikainen', username: 'Matikka' },
        { id: 3, first_name: 'Jackie', last_name: 'Chan', username: 'Chan' }
    ]);
});

// POST /reviews - Add a new review
app.post('/reviews', (req, res) => {
    const newReview = req.body;
    res.status(201).json({
        message: 'Review added successfully',
        review: newReview
    });
});

// GET /customer_favorites - Get all customer favorites
app.get('/customer_favorites', (req, res) => {
    res.status(200).json([
        { customer_id: 1, movie_id: 1 },  // Unnq's favorite: The Matrix
        { customer_id: 2, movie_id: 2 },  // Matti's favorite: The Godfather
        { customer_id: 3, movie_id: 3 }   // Jackie's favorite: Die Hard
    ]);
});

// Catch-all for unknown endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});

// Start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
