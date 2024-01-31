import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Moviemain from "./Moviemain";
import Movie from "./Movie";
import Tv from "./TV";
import Maintv from "./Maintv";
import Voice from "./Voice";

const Approuter = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Moviemain/>
        },
        {
          path:'/voice',
          element: <Voice/>
      },
        {
            path:'/movie/:_id',
            element: <Movie/>
        },
        {
          path:'/tv',
          element: <Tv/>
        },
        {
          path:'/tv1/:_id',
          element: <Maintv/>
        }

    ])
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default Approuter
