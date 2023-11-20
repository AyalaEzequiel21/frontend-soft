import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createHashRouter, RouterProvider } from 'react-router-dom'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
