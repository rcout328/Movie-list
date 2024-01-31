import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Kk = () => {
  const { _id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${_id}?api_key=b1666d3d17f247efa7f49e045debdf4a`)
      .then((data) => data.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [_id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-4">
      <button onClick={() => { /* navigation logic here */ }} className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md text-xl">
        <Link to="/search">Back</Link>
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <img 
          src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto object-cover rounded-md mb-4 mx-auto"
        />
        <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
        <p><strong>Original Title:</strong> {movie.original_title}</p>
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Production Companies:</strong> {movie.production_companies.map(company => company.name).join(', ')}</p>
        <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
        <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
        <p><strong>IMDb ID:</strong> {movie.imdb_id}</p>
        <p><strong>Tagline:</strong> {movie.tagline}</p>
        <p><strong>Status:</strong> {movie.status}</p>
        <p><strong>Vote Average:</strong> {movie.vote_average} / 10</p>
        <p><strong>Spoken Languages:</strong> {movie.spoken_languages.map(language => language.english_name).join(', ')}</p>
        {/* Additional details can be added as needed */}
      </div>
    </div>
  );
};

export default Kk;
