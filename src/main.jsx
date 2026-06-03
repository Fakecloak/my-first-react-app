import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './React-Router/Home.jsx'
import Profile from './React-Router/Profile.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "profile",
    element : <Profile />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
