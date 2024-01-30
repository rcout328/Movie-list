import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Moviemain from "./Moviemain";
import Movie from "./Movie";
const Approuter = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Moviemain/>
        },
        {
            path:'/movie/:_id',
            element: <Movie/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Approuter
