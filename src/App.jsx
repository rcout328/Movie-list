import { useEffect, useState } from'react'

const App = () => {

  const [song,setSong] = useState();

  

  useEffect(()=>{
    fetch('https://api.spotify.com/v1/search?q=spotify&type=track&limit=1&offset=0&market=US')
     .then(res => res.json())
     .then(data => {
        setSong(data.tracks.items[0])
      })
  })
  return (
    <div>
      <input>
        <button></button>
      </input>
    </div>
  )
}

export default App
