import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/regiter'
import Index from '../pages/home'
import AllAlert from '../pages/alert-progress/index.'
import NotFound from '../pages/error/404'
import AddPlant from '../pages/add-plant'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/sing-up',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Index />,
  },
  {
    path: '/alert',
    element: <AllAlert />,
  },
  {
    path: '/add',
    element: <AddPlant />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
