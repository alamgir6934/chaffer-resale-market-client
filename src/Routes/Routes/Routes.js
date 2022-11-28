import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Categories/Category/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                // loader: () => fetch('http://localhost:5000/Products')
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
            // {
            //     path: '/resale/:id',
            //     element: <ResaleCategory></ResaleCategory>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/Products/${params._id}`)

            // }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard><PrivateRoute></PrivateRoute></Dashboard>
    }

])
export default router;