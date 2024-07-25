import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./components/router/Route";
import AllOverContext from "./utils/AllOverContext";

const App = () => {
  return (
    <>
      <AllOverContext>
        <RouterProvider router={route} />
      </AllOverContext>
    </>
  );
};

export default App;
