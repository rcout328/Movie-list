import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Maintv = () => {
  const { _id } = useParams();
  const [tv, setTv] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${_id}?api_key=b1666d3d17f247efa7f49e045debdf4a`)
      .then((data) => data.json())
      .then((data) => setTv(data))
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  if (!tv) {
    return <div>Loading...</div>;
  }

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center p-4">
      <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md text-xl">
        <Link to="/">Back</Link>
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col md:flex-row md:items-center md:justify-between">
        <img 
          src={`${IMAGE_BASE_URL}${tv.poster_path}`} 
          alt={tv.name} 
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto object-cover rounded-md mb-4 mx-auto"
        />
        <div className="md:w-1/2 p-4">
          <h3 className="font-bold text-2xl mb-2">{tv.name}</h3>
          <p className="text-gray-700 mb-4">{tv.overview}</p>
          <div className="flex justify-between">
            <p className="text-xl font-semibold">First Air Date: {tv.first_air_date}</p>
            <p className="text-xl font-semibold">Rating: {tv.vote_average}</p>
          </div>
          {/* Include other details here */}
        </div>
      </div>
    </div>
  );
}

export default Maintv;
