import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Moviemain from "./Moviemain";
import Movie from "./Movie";
import Tv from "./Tv";
import Maintv from "./Maintv";
import Voice from "./Voice";
import Search from "./Search";
import Kk from "./Kk"
import Search1 from "./Search1";
import Kk2 from "./Kk2";

const Approuter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Moviemain/>
        },
        {
            path: '/voice',
            element: <Voice/>
        },
        {
            path: '/movie/:_id',
            element: <Movie/>
        },
        {
            path: '/tv',
            element: <Tv/>
        },
        {
            path: '/tv1/:_id',
            element: <Maintv/>
        },
        {
            path: '/search',
            element: <Search/>
        },
        {
            path: '/kk/:_id',
            element: <Kk/>
        },
        {
          path: '/search1',
            element: <Search1/>
        },
        {
          path: '/kk2/:_id',
          element: <Kk2/>
      },
        
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Approuter;
