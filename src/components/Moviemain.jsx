import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const App = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "b1666d3d17f247efa7f49e045debdf4a"; // Replace with your actual API key

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results); // Access the 'results' property in the API response
          console.log(data.results); // Log the results for debugging
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
      <div className="container mx-auto p-4">
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                <Link to={`/movie/${movie.id}`}>
                  <div className="w-full h-96 mb-4 overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
                    <p><strong>Year:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.popularity}</p>
                    <p><strong>Director:</strong> {movie.vote_average}</p>
                    <p><strong>Runtime:</strong> {movie.vote_count}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
