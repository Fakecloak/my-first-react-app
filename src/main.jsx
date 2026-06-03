import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './React-Router/Home.jsx'
import Profile from './React-Router/Profile.jsx';
import ErrorPage from './React-Router/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path : "profile/:name",
    element : <Profile />,
    /* children : [
      { index: true, //default child route for profile
        element: <DefaultProfile /> 
      },
      {
        path : "popeye",
        element : <Popeye />
      },
      {
        path : "spinach",
        element : <Spinach />
      },
    ] */
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
