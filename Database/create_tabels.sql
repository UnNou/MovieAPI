
CREATE TABLE genre (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE movie (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    genre_id INT REFERENCES genre(genre_id) ON DELETE CASCADE
);


CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    year_of_birth INT NOT NULL
);


CREATE TABLE review (
    review_id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movie(movie_id) ON DELETE CASCADE,
    customer_id INT REFERENCES customer(customer_id) ON DELETE CASCADE,
    stars INT CHECK (stars >= 1 AND stars <= 5),  -- Rating between 1 and 5
    review_text TEXT
);


CREATE TABLE customer_favorites (
    customer_id INT REFERENCES customer(customer_id) ON DELETE CASCADE,
    movie_id INT REFERENCES movie(movie_id) ON DELETE CASCADE,
    PRIMARY KEY (customer_id, movie_id)
);
