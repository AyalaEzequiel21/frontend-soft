// import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
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
    <>    
      <Header/>
        <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
