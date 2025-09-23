import React, { useState, useEffect, useRef } from 'react';
const API_KEY = "b09bee4f552784c9f3a4cea3ddcd71fd";
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Create a ref for the scrollable container
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // 3. Create functions to handle scrolling
    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            // scrollLeft moves the scrollbar, clientWidth is the visible width
            scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth;
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth;
        }
    };

    if (loading) return <div className="loading">Loading movies...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="movie-row">
            <h2>Trending This Week</h2>
            <div className="posters-wrapper">
                {/* 4. Add the scroll buttons */}
                <button className="scroll-btn left" onClick={handleScrollLeft}>&lt;</button>

                {/* 5. Attach the ref to the div you want to scroll */}
                <div className="movie-posters" ref={scrollContainerRef}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="poster-container">
                            <img
                                className="movie-poster"
                                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                    ))}
                </div>

                <button className="scroll-btn right" onClick={handleScrollRight}>&gt;</button>
            </div>
        </div>
    );
}

export default Movies;