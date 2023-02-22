import React from "react";
import {LoginPage} from './pages/LoginPage';
import {MainPage} from './pages/MainPage';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<LoginPage />} />
    <Route path="/home" element={<MainPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;