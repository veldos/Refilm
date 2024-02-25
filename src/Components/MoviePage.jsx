import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MoviePage() {
  const { id } = useParams(); // Get the movie movie_id from the URL
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2EzMGRhNDVlMzZjMTc1ZGZjYjRhZTRmNWZmMGRmMSIsInN1YiI6IjY1M2QyZmJhMTA5Y2QwMDE0ZGY0NjVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b-PBKpSPdxZB0RjK0FpGKsxd7Bib8FxrbRSSpyljPs4'
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
          <p>Original Language: {movie.original_language}</p>
          <p>Production Company: {movie.production_companies[0].name}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Spoken Languages: {movie.spoken_languages.map((lang) => lang.name).join(', ')}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MoviePage;
