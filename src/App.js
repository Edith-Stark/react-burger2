import React from "react";

import "./App.css";
import Home from "./Pages/Home";
import Nav from "./Components/Nav/Nav";
import Menu from "./Pages/Menu";
import ReserveTable from "./Pages/ReserveTable";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route path="/" element={<Home />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="reserveTable" element={<ReserveTable />} />
    </Route>
  )
);
export default function App() {
  return (
    <body
      basename="/react-burger
    "
    >
      <RouterProvider router={router} />
    </body>
  );
}
