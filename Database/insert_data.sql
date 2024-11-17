
INSERT INTO genre (genre_name) 
VALUES
('Drama'),
('Sci-Fi'),
('Action'),
('Comedy'),
('Fantasy'),
('Horror');


INSERT INTO "user" (username, password, name, year_of_birth) 
VALUES
('jaska_rocker', 'password123', 'Jaska Rocker', 1990),
('tuomas_smith', 'securepass', 'Tuomas Smith', 1992),
('alex_jones', 'pass1234', 'Alex Jones', 1988);


INSERT INTO movie (movie_name, year, genre_id) 
VALUES
('Dreams', 2010, 2),
('Knights of Darkness', 2008, 2),
('Revolt of the Machines', 1999, 2),
('Avengers: Endgame', 2019, 3),
('Hangover: Chaos', 2009, 4),
('Iron Crown', 2017, 5),
('Nocturnal Rites', 2005, 6);


INSERT INTO review (movie_id, user_id, stars, review_text) 
VALUES
(1, 1, 5, 'Amazing movie, mind-bending!'),
(2, 2, 4, 'Great movie, but the plot had some flaws.'),
(3, 3, 5, 'A classic! Love the story and action.'),
(4, 1, 5, 'Perfect ending to the Avengers saga!'),
(5, 2, 3, 'It was fun, but a bit over the top at times.'),
(6, 1, 4, 'Fantasy at its best, amazing world!'),
(7, 3, 5, 'Horror and suspense combined perfectly!');


INSERT INTO user_favorites (user_id, movie_id) 
VALUES
(1, 1),
(2, 3),
(3, 2);
