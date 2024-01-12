import { RouterProvider } from 'react-router-dom'
import {GlobalContextProvider} from './context/GlobalContext'
import { routerHash } from './config/RouterHash'

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={routerHash}/>
    </GlobalContextProvider>
  )
}
export default App
