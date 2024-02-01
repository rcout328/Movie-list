import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming this is your Navbar component
import { Mic, MicOff } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [speech, setSpeech] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b1666d3d17f247efa7f49e045debdf4a&query=${search}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((err) => console.log(err));
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search submission logic here
  };

  const recognition = () =>
    new (
      window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition
    )();

  const onKK = () => {
    const recognitionInstance = recognition();
    recognitionInstance.lang = "en-US";

    // Enabling continuous listening
    recognitionInstance.interimResults = true;

    recognitionInstance.onstart = () => {
      setIsListening(true);
      setShowPopup(true);
    };

    recognitionInstance.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript;
        } else {
          transcript += event.results[i][0].transcript + " ";
        }
      }
      setSearch(transcript);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
      setShowPopup(false);

      toast.success("Successfully Searched: " + search);
    };

    recognitionInstance.onerror = (err) => {
      console.log("Error: ", err);
      alert(
        "Boss! You're not allowed to use this feature. Please allow voice permission"
      );
    };

    recognitionInstance.start();
  };

  useEffect(() => {
    // Init Speech recognition
    setSpeech(recognition);
  }, []);

  const onListen = () => {
    if (!isListening) {
      onKK(search);
    } else {
      speech.stop();
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen pt-12">
      <h1 className="text-3xl font-semibold text-white mb-6 flex justify-center items-center">Movies Search</h1>
        <div className="flex justify-center mt-8">
        
          <form onSubmit={handleSubmit} className="w-full max-w-lg relative">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pr-16 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for movies"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button" // Change to type="button"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onListen}
            >
              {isListening ? (
                <MicOff />
              ) : (
                <Mic />
              )}
            </button>
          </form>
        </div>
        {showPopup && (
          <div className="listening-popup">
            <p>Listening...</p>
            <p>User said: {search}</p>
          </div>
        )}
        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.length > 0 ? (
              results.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-moviee rounded-lg overflow-hidden shadow-lg p-4"
                >
                  <Link to={`/kk/${movie.id}`}>
                    <div className="w-full h-96 mb-4 overflow-hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
                      <p><strong>Release Date:</strong> {movie.release_date}</p>
                      <p><strong>Rating:</strong> {movie.popularity}</p>
                      <p><strong>Average Vote:</strong> {movie.vote_average}</p>
                      <p><strong>Vote Count:</strong> {movie.vote_count}</p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-white">Enter a movie name to search.</p>
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Search;
