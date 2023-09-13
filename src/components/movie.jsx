import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8f2dcc6a6e829c62f51340e3806d306a';
const API_images = 'https://image.tmdb.org/t/p/w200';

const MovieBox = ({ movies, setMovies }) => {
  const [visibleMovies, setVisibleMovies] = useState(10);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [setMovies]);

  const toggleMovies = () => {
    setVisibleMovies(movies.length); // Show all movies

    setShowAll(!showAll);
  };

  return (
    <div className="px-32 py-10">
      <div className="flex justify-between gap-1 items-center">
        <h1 className="font-bold text-lg lg:text-4xl">Top Rated</h1>
        <button
          onClick={toggleMovies}
          className="text-[#BE123C] font-semibold  lg:text-lg flex items-center gap-1 lg:gap-3"
        >
          See more <span className="lg:text-xl">&gt;</span>
        </button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-y-6 content-stretch">
        {movies.slice(0, visibleMovies).map((movie) => {
          const { title, release_date, poster_path, id } = movie;
          return (
            <div
              key={movie.id}
              data-testid="movie-card"
              className="grow text-middle pt-10"
            >
              <a href={`/movie/${id}`}>
                <img
                  src={API_images + poster_path}
                  alt="movie-poster"
                  data-testid="movie-poster"
                />

                <h2 data-testid="movie-title" className="font-bold text-lg">
                  {title}
                </h2>
                <h4 data-testid="movie-release-date" className="text-[#9CA3AF]">
                  Release Date: {release_date}
                </h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieBox;
