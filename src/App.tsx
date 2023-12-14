import { AppLayout } from '@/components/common/AppLayout'
import  {Home}  from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Clients } from './pages/Clients/Clients'
import { Products } from './pages/Products/Products'
import { Users } from './pages/Users/Users'
import { Payments } from './pages/Payments/Payments'
 
const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/clients',
        element: <Clients />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/payments',
        element: <Payments />
      }
    ]
  }, 
  {
    path: 'login',
    element:<Login />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
