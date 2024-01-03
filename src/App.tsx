import { AppLayout } from '@/components/common/AppLayout'
import  {Home}  from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Clients } from '@/pages/Clients/Clients'
import { Products } from '@/pages/Products/Products'
import { Users } from '@/pages/Users/Users'
import { Payments } from '@/pages/Payments/Payments'
import { Sales } from '@/pages/Sales/Sales'
import { Reports } from './pages/Reports/Reports'
import { Orders } from './pages/Orders/Orders'
import GlobalContextProvider from './context/GlobalContext'
 
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
      },
      {
        path: '/sales',
        element: <Sales/>
      },
      {
        path: '/reports',
        element: <Reports/>
      },
      {
        path: '/orders',
        element: <Orders/>
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
    <GlobalContextProvider>
      <RouterProvider router={router}/>
    </GlobalContextProvider>
  )
}
export default App
