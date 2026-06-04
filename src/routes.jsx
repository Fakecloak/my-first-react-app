import Home from './React-Router/Home.jsx'
import Profile from './React-Router/Profile.jsx';
import ErrorPage from './React-Router/ErrorPage.jsx';

const routes = [
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
];

export default routes;