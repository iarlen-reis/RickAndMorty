import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import SearchDetails from "../pages/SearchDetails/SearchDetails";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const router = createBrowserRouter([
  {
    element: [<Header key={1} />, <Footer key={2} />],
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search",
        element: <SearchDetails />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetails />,
      },
    ],
  },
]);
