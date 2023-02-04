import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import TourPlaces from "../components/TourPlaces/TourPlaces";
import VisitPlace from "../components/VisitPlace/VisitPlace";
import Main from "../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/places"),
      },
      {
        path: "/",
        element: <TourPlaces></TourPlaces>,
      },
      {
        path: "/places/:id",
        element: (
          <PrivateRoute>
            <VisitPlace></VisitPlace>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/places/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
