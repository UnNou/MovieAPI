import express from 'express';
import { client } from './pgserver';


const app = express();

// middleware to parse JSON in POST requests?
app.use(express.json());

// start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

// -------------------- ENDPOINTS --------------------

// GET / - Test endpoint
app.get('/', async (req, res) => {
    res.status(200).send('Welcome to the Movie API!');
});

// POST /genres - Add a new genre
app.post('/genres', async (req, res) => {
    const { genre_name } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO genre (genre_name) VALUES ($1) RETURNING *',
            [genre_name]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add genre' });
    }
});

// POST /movies - Add a new movie
app.post('/movies', async (req, res) => {
    const { movie_name, year, genre_id } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO movie (movie_name, year, genre_id) VALUES ($1, $2, $3) RETURNING *',
            [movie_name, year, genre_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add movie' });
    }
});

// GET /movies - Get all movies (paginated)
app.get('/movies', async (req, res) => {
    const { page = 1, size = 10 } = req.query; // Defaults: page 1, 10 per page
    const offset = (page - 1) * size;
    try {
        const result = await client.query(
            'SELECT * FROM movie ORDER BY movie_id LIMIT $1 OFFSET $2',
            [size, offset]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

// GET /movies/:id - Get movie by ID
app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query(
            'SELECT * FROM movie WHERE movie_id = $1',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch movie' });
    }
});

// DELETE /movies/:id - Remove movie by ID
app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query(
            'DELETE FROM movie WHERE movie_id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Movie not found or has dependencies' });
        }
        res.status(200).json({ message: 'Movie deleted', movie: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete movie' });
    }
});

// POST /customers - Register new user
app.post('/customers', async (req, res) => {
    const { first_name, last_name, username, password_hash, year_of_birth } = req.body;
    try {
        const result = await client.query(
            `INSERT INTO customer (first_name, last_name, username, password_hash, year_of_birth)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [first_name, last_name, username, password_hash, year_of_birth]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register customer' });
    }
});

// GET /movies/search - Get movies by keyword
app.get('/movies/search', async (req, res) => {
    const { keyword } = req.query;
    try {
        const result = await client.query(
            'SELECT * FROM movie WHERE movie_name ILIKE $1',
            [`%${keyword}%`]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

// POST /reviews - Add a review for a movie
app.post('/reviews', async (req, res) => {
    const { movie_id, customer_id, stars, review_text } = req.body;
    try {
        const result = await client.query(
            `INSERT INTO review (movie_id, customer_id, stars, review_text)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [movie_id, customer_id, stars, review_text]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add review' });
    }
});

// POST /favorites - Add a favorite movie for a user
app.post('/favorites', async (req, res) => {
    const { customer_id, movie_id } = req.body;
    try {
        const result = await client.query(
            `INSERT INTO customer_favorites (customer_id, movie_id)
             VALUES ($1, $2) RETURNING *`,
            [customer_id, movie_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add favorite movie' });
    }
});

// GET /favorites/:username - Get favorite movies by username
app.get('/favorites/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const result = await client.query(
            `SELECT movie.* 
             FROM movie
             JOIN customer_favorites ON movie.movie_id = customer_favorites.movie_id
             JOIN customer ON customer_favorites.customer_id = customer.customer_id
             WHERE customer.username = $1`,
            [username]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch favorite movies' });
    }
});

// Catch-all for unknown endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});
