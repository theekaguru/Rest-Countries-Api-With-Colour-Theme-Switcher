import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { CountryDetails } from './pages/CountryDetails';



function App() {
  

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/country/:countryName',
    element: <CountryDetails />,
    errorElement: <Error />
  }
  

  ]);

  return <RouterProvider router={router} />
}

export default App;
