import express from 'express';

const app = express();

// middleware to parse JSON in POST requests?
app.use(express.json());

// raw endpoints

// GET / test endpoint
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Movie API!');
});

// GET /movies - all movies
app.get('/movies', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'The Matrix', year: 1999, genre: 'Sci-Fi' },
        { id: 2, name: 'The Godfather', year: 1972, genre: 'Drama' },
        { id: 3, name: 'Die Hard', year: 1988, genre: 'Action' }
    ]);
});

// POST /movies - add a new movie
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    res.status(201).json({
        message: 'Movie added successfully',
        movie: newMovie
    });
});

// GET /customers - get all customers
app.get('/customers', (req, res) => {
    res.status(200).json([
        { id: 1, first_name: 'Unnq', last_name: 'Nousiainen', username: 'Noun' },
        { id: 2, first_name: 'Matti', last_name: 'Matikainen', username: 'Matikka' },
        { id: 3, first_name: 'Jackie', last_name: 'Chan', username: 'Chan' }
    ]);
});

// POST /reviews - add a new review
app.post('/reviews', (req, res) => {
    const newReview = req.body;
    res.status(201).json({
        message: 'Review added successfully',
        review: newReview
    });
});

// GET /customer_favorites - get all customer favorites
app.get('/customer_favorites', (req, res) => {
    res.status(200).json([
        { customer_id: 1, movie_id: 1 },  // unnq's favorite: The Matrix
        { customer_id: 2, movie_id: 2 },  // matti's: The Godfather
        { customer_id: 3, movie_id: 3 }   // jackie's: Die Hard
    ]);
});

// catch-all for unknown endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});

// start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
