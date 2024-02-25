import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieList() {
  const [mediaType, setMediaType] = useState('movie'); // Default to 'movie'
  const [mediaList, setMediaList] = useState([]);
  const apiKey = 'dca30da45e36c175dfcb4ae4f5ff0df1'; // Your TMDb API key

  const fetchMedia = (type) => {
    const apiUrl = `https://api.themoviedb.org/3/${type}/top_rated`;

    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        setMediaList(response.data.results);
      })
      .catch((error) => {
        console.log.error('Error fetching media data:', error);
      });
  };

  useEffect(() => {
    fetchMedia(mediaType);
  }, [mediaType]);

  return (
    <div>
      <h1 className="mb-4">Top Rated {mediaType === 'movie' ? 'Movies' : 'TV Shows'}</h1>
      <button className="btn btn-primary" onClick={() => setMediaType('movie')}>
        Top Rated Movies
      </button>
      <button className="btn btn-primary ml-2" onClick={() => setMediaType('tv')}>
        Top Rated TV Shows
      </button>
      <div className="row">
        {mediaList.map((media) => (
          <div key={media.id} className="col-md-4 mb-4">
            <div className="card">
              <Link to={`/movies/${media.id}`}> {/* Add Link to MoviePage */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                  alt={media.title || media.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{media.title || media.name}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
