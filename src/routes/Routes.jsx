import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'

import HotDishes from '../components/Dishes/HotDishes'
import Menu from '../Pages/Menu/MenuPage'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Dashboard from '../Pages/Dashboard/Sidebar'
import DashboardLayout from '../layouts/DashboardLayout'
import AddItem from '../Pages/Dashboard/AddItem'
import ManageItem from '../Pages/Dashboard/ManageItem'
import ManageUser from '../Pages/Dashboard/ManageUser'
import MyCart from '../Pages/Dashboard/MyCart'
import PaymentHistory from '../Pages/Dashboard/PaymentHistory'
import Payment from '../Pages/Dashboard/Payment/Payment'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Blogs from '../Pages/Blogs/Blogs'
import ManageItemField from '../Pages/Dashboard/ManageItemField'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/register',
        element: <Register />
      },
      {
        path:'/about',
        element:<AboutUs />
      },
      {
        path: '/blog',
        element:<Blogs />
      }

    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children:[
      {
        path:'/dashboard/add-item',
        element: <AddItem />
      }
      ,
      {
        path:'/dashboard/manage-item',
        element: <ManageItem />
      },
      {
        path:'/dashboard/manage-user',
        element: <ManageUser />
      },
      {
        path:'/dashboard/my-cart',
        element: <MyCart />
      },
      {
        path:'/dashboard/payment-history',
        element: <PaymentHistory />
      },
      {
        path:'/dashboard/payment',
        element: <Payment />
      },
      {
        path:'/dashboard/item-field/:id',
        element:<ManageItemField/>,
        loader: ({params})=> fetch(`http://localhost:5000/menuItem/${params.id}`)
      }

    ]
  }

])
