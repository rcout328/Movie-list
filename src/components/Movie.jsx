import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const { _id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/movies/${_id}`)
      .then((data) => data.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, year, rating, director, runtime, language, boxOffice, poster } = movie;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-4">
      <button onClick={() => { /* navigation logic here */ }} className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md text-xl">
        <Link to="/">Back</Link>
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <img 
  src={poster} 
  alt={title} 
  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto object-cover rounded-md mb-4 mx-auto"
/>

        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Runtime:</strong> {runtime} minutes</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Box Office:</strong> {boxOffice}</p>
      </div>
    </div>
  );
};

export default Movie;
