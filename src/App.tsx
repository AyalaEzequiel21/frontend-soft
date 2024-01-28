import { RouterProvider } from 'react-router-dom'
import { routerHash } from './config/RouterHash'

function App() {
  
  return (
    <>
        <RouterProvider router={routerHash}/>
    </>
  )
  
}
export default App
