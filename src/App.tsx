
import { createBrowserRouter , RouterProvider} from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Countries } from './pages/Countries'
import { Error } from './pages/Error'

function App() {
   const router = createBrowserRouter([

   {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>
   },
   {
    path:'/country',
    element:<Countries/>,
    errorElement:<Error/>

   }

   ])
  return (
    <RouterProvider router ={router}/>
  )
}

export default App
