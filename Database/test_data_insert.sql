
INSERT INTO genre (genre_name) 
VALUES 
  ('Drama'), 
  ('Sci-Fi'), 
  ('Action'), 
  ('Fantasy'), 
  ('Horror');

INSERT INTO movie (movie_name, year, genre_id) 
VALUES 
  ('The Matrix', 1999, 2), -- scifi
  ('The Godfather', 1972, 1), -- drama
  ('Die Hard', 1988, 3), -- action
  ('Harry Potter', 2001, 4), -- fantasy
  ('The Conjuring', 2013, 5); -- horror


INSERT INTO customer (first_name, last_name, username, password_hash, year_of_birth)
VALUES 
  ('Unnq', 'Nousiainen', 'Noun', 'Salasana123', 1887),
  ('Matti', 'Matikainen', 'Matikka', 'Salsa321', 2006),
  ('Jackie', 'Chan', 'Chan', 'Chan123', 1954);


INSERT INTO review (movie_id, customer_id, stars, review_text) 
VALUES 
  (1, 1, 5, 'Iconic film and a masterpiece of sci-fi.'),
  (2, 2, 4, 'Fantastic classic.'),
  (3, 3, 3, 'Good action.'),
  (4, 1, 5, 'A magical adventure.'),
  (5, 2, 2, 'Not as scary as expected.');


INSERT INTO customer_favorites (customer_id, movie_id) 
VALUES 
  (1, 1),  -- Unnq's favorite: The Matrix
  (2, 2),  -- Matti's favorite: The Godfather
  (3, 3);  -- Jackie's favorite: Die hard
