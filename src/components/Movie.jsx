import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const { _id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${_id}?api_key=b1666d3d17f247efa7f49e045debdf4a`)
      .then((data) => data.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Base URL for images
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-4">
      <button onClick={() => { /* navigation logic here */ }} className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md text-xl">
        <Link to="/">Back</Link>
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <img 
          src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto object-cover rounded-md mb-4 mx-auto"
        />
        <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
        {/* Include other details here */}
      </div>
    </div>
  );
};

export default Movie;
