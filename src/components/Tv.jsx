import { useEffect , useState } from "react"

import { Link } from "react-router-dom"
import Navbar from "./Navbar"
const Tv = () => {
    const [tv,setTv] = useState([])




    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=b1666d3d17f247efa7f49e045debdf4a')
        .then(res => res.json())
        .then(data => {
            if(data.results){
                setTv(data.results)
                console.log(data.results)
            }
        }).catch(err =>{
            console.error(err)
        })
    })

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tv && tv.length > 0 ? (
          tv.map((tv) => (
            <div key={tv.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              <Link to={`/tv1/${tv.id}`}>
                <div className="w-full h-96 mb-4 overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                    alt={tv.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{tv.name}</h3>
                  <p><strong>Year:</strong> {tv.release_date}</p>
                  <p><strong>Rating:</strong> {tv.popularity}</p>
                  <p><strong>Director:</strong> {tv.vote_average}</p>
                  <p><strong>Runtime:</strong> {tv.vote_count}</p>
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
  )
}

// Move the export statement to a separate file
// Remove the export statement from this file
export default Tv

