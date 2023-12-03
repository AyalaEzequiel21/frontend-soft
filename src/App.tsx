import { AppLayout } from '@/components/common/AppLayout'
import  {Home}  from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Clients } from './pages/Clients/Clients'
 
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
