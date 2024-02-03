import { createHashRouter } from "react-router-dom";
import { AppLayout } from '@/components/common/AppLayout'
import  {Home}  from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { Clients } from '@/pages/Clients/Clients'
import { Products } from '@/pages/Products/Products'
import { Users } from '@/pages/Users/Users'
import { Payments } from '@/pages/Payments/Payments'
import { Sales } from '@/pages/Sales/Sales'
import { Reports } from '@/pages/Reports/Reports'
import { Orders } from '@/pages/Orders/Orders'
import { ClientDetails } from "@/pages/Clients/ClientDetails";
import { ProductDetails } from "@/pages/Products/ProductDetails";
import { UserDetails } from "@/pages/Users/UserDetails";
import { PaymentDetails } from "@/pages/Payments/PaymetnDetails";
import { SaleDetails } from "@/pages/Sales/SaleDetails";
import { ReportDetails } from "@/pages/Reports/ReportDetails";
import { OrdertDetails } from "@/pages/Orders/OrderDetails";

export const routerHash = createHashRouter([
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
        element: <Clients />,
        children: [
          {
            path: ':clientId',
            element: <ClientDetails/>
          }
        ]
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: ':productId',
            element: <ProductDetails/> 
          }
        ]
      },
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: ':userId',
            element: <UserDetails/>
          }
        ]
      },
      {
        path: '/payments',
        element: <Payments/>,
        children: [
          {
            path: ':paymentId',
            element: <PaymentDetails/>
          }
        ]
      },
      {
        path: '/sales',
        element: <Sales/>,
        children: [
          {
            path: ':saleId',
            element: <SaleDetails/>
          }
        ]
      },
      {
        path: '/reports',
        element: <Reports/>,
        children: [
          {
            path: ':reportId',
            element: <ReportDetails/>
          }
        ]
      },
      {
        path: '/orders',
        element: <Orders/>,
        children: [
          {
            path: ':orderId',
            element: <OrdertDetails/>
          }
        ]
      }
    ]
  }, 
  {
    path: 'login',
    element:<Login />
  }
    
])