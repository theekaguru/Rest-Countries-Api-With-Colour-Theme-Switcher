import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Countries } from './pages/Countries';
import { Error } from './pages/Error';
import { CountryDetail } from './pages/CountryDetail';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home theme={theme} setTheme={setTheme} />,
      errorElement: <Error />,
    },
    {
      path: '/country',
      element: <Countries theme={theme} setTheme={setTheme} />,
      errorElement: <Error />,
    },
    {
      path: '/country/:name',
      element: <CountryDetail theme={theme} setTheme={setTheme} />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
