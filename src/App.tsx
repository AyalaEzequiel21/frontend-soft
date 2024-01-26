import { RouterProvider } from 'react-router-dom'
import { routerHash } from './config/RouterHash'
// import { UserProvider } from './context/UserContext'

function App() {
  
  return (
    <>
        <RouterProvider router={routerHash}/>
    </>
  )
  
}
export default App
