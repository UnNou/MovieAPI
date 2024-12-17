[
    {
        "method": "POST",
        "endpoint": "/genres",
        "response": {
            "status": "success",
            "data": {
                "genre_id": 1,
                "genre_name": "Action"
            }
        }
    },
    {
        "method": "POST",
        "endpoint": "/movies",
        "response": {
            "status": "success",
            "data": {
                "movie_id": 1,
                "movie_name": "The Matrix",
                "year": 1999,
                "genre_id": 2
            }
        }
    },
    {
        "method": "GET",
        "endpoint": "/movies",
        "response": {
            "status": "success",
            "data": [
                {
                    "movie_id": 1,
                    "movie_name": "The Matrix",
                    "year": 1999,
                    "genre_id": 2
                },
                {
                    "movie_id": 2,
                    "movie_name": "The Godfather",
                    "year": 1972,
                    "genre_id": 1
                }
            ]
        }
    },
    {
        "method": "GET",
        "endpoint": "/movies/1",
        "response": {
            "status": "success",
            "data": {
                "movie_id": 1,
                "movie_name": "The Matrix",
                "year": 1999,
                "genre_id": 2
            }
        }
    },
    {
        "method": "DELETE",
        "endpoint": "/movies/1",
        "response": {
            "status": "success",
            "message": "Movie deleted"
        }
    },
    {
        "method": "POST",
        "endpoint": "/customers",
        "response": {
            "status": "success",
            "data": {
                "customer_id": 1,
                "first_name": "Unnq",
                "last_name": "Nousiainen",
                "username": "Noun",
                "year_of_birth": 1887
            }
        }
    },
    {
        "method": "GET",
        "endpoint": "/movies/search",
        "response": {
            "status": "success",
            "data": [
                {
                    "movie_id": 1,
                    "movie_name": "The Matrix",
                    "year": 1999,
                    "genre_id": 2
                }
            ]
        }
    },
    {
        "method": "POST",
        "endpoint": "/reviews",
        "response": {
            "status": "success",
            "data": {
                "review_id": 1,
                "movie_id": 1,
                "customer_id": 1,
                "stars": 5,
                "review_text": "Iconic film and a masterpiece of sci-fi."
            }
        }
    },
    {
        "method": "POST",
        "endpoint": "/favorites",
        "response": {
            "status": "success",
            "data": {
                "customer_id": 1,
                "movie_id": 1
            }
        }
    },
    {
        "method": "GET",
        "endpoint": "/favorites/Noun",
        "response": {
            "status": "success",
            "data": [
                {
                    "movie_id": 1,
                    "movie_name": "The Matrix",
                    "year": 1999,
                    "genre_id": 2
                }
            ]
        }
    }
]
