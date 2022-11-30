import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Categories/Category/Category";
import AllSelar from "../../Pages/Dashboard/AllSelar/AllSelar";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer";
import Addproduct from "../../Pages/Dashboard/Dashboard/AddProduct/Addproduct";
import AllUsers from "../../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageProducts from "../../Pages/Dashboard/Dashboard/ManageProducts/ManageProducts";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import SallerRoute from "./SallerRoute/SallerRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                // loader: () => fetch('https://chaffer-resale-server.vercel.app/Products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
            // {
            //     path: '/resale/:id',
            //     element: <ResaleCategory></ResaleCategory>,
            //     loader: ({ params }) => fetch(`https://chaffer-resale-server.vercel.app/Products/${params._id}`)

            // }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/sellar',
                element: <SallerRoute><AllSelar></AllSelar></SallerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SallerRoute><Addproduct></Addproduct></SallerRoute>
            },
            {
                path: '/dashboard/buyer',
                element: <BuyerRoute><Buyer></Buyer></BuyerRoute>
            },
            {
                path: '/dashboard/manageproducts',
                element: <SallerRoute><ManageProducts></ManageProducts></SallerRoute>
            },

            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://chaffer-resale-server.vercel.app/bookings/${params.id}`)

            },



        ]
    },

])
export default router;