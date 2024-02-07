import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { AppLayout } from './components/common/AppLayout'
import { Clients } from './pages/Clients/Clients'
import { Products } from './pages/Products/Products'
import { Sales } from './pages/Sales/Sales'
import { Payments } from './pages/Payments/Payments'
import { Orders } from './pages/Orders/Orders'
import { Users } from './pages/Users/Users'
import { ClientDetails } from './pages/Clients/ClientDetails'
import { ProductDetails } from './pages/Products/ProductDetails'
import { SaleDetails } from './pages/Sales/SaleDetails'
import { PaymentDetails } from './pages/Payments/PaymetnDetails'
import { OrdertDetails } from './pages/Orders/OrderDetails'
import { Reports } from './pages/Reports/Reports'
import { ReportDetails } from './pages/Reports/ReportDetails'
import { UserDetails } from './pages/Users/UserDetails'
import { Login } from './pages/Login/Login'

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>} >
          <Route index element={<Home/>} />
          <Route path='clients' element={<Clients/>}/>
          <Route path='clients/:clientId' element={<ClientDetails/>} />
          <Route path='products' element={<Products/>}/>
          <Route path='products/:productId' element={<ProductDetails/>} />
          <Route path='sales' element={<Sales/>}/>
          <Route path='sales/:saleId' element={<SaleDetails/>} />
          <Route path='payments' element={<Payments/>}/>
          <Route path='payments/:paymentId' element={<PaymentDetails/>} />
          <Route path='orders' element={<Orders/>}/>
          <Route path='orders/:orderId' element={<OrdertDetails/>} />
          <Route path='reports' element={<Reports/>} />
          <Route path='reports/:resportId' element={<ReportDetails/>} />
          <Route path='users' element={<Users/>} />
          <Route path='users/:userId' element={<UserDetails/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </HashRouter>
  )
  
}
export default App
