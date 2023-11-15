import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {

  return (
    <BrowserRouter basename='/frontend-soft/'>    
      <Header/>
      <Container >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Login />}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
