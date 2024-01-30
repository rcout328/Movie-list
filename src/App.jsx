import  { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Runtime:</strong> {movie.runtime}</p>
                <p><strong>Language:</strong> {movie.language}</p>
                <p><strong>Box Office:</strong> {movie.boxOffice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
