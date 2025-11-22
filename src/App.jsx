import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import "./index.css";
import { useUser } from "@clerk/clerk-react";
import Loading from "./components/loading/Loading";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const { isLoaded } = useUser();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return isLoaded ? (
    <RouterProvider router={router}></RouterProvider>
  ) : (
    <Loading />
  );
};

export default App;
