import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root";
import Esther from "./routes/Esther";
import Exodus from "./routes/Exodus";
import Genesis from "./routes/Genesis";
import Psalms from "./routes/Psalms";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "esther",
    element: <Esther />,
  },
  {
    path: "exodus",
    element: <Exodus />,
  },
  {
    path: "genesis",
    element: <Genesis />,
  },
  { 
    path: "psalms",
    element: <Psalms />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
