import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoriesDetails from "../../Pages/Categories/CategoriesDetails/CategoriesDetails";
import Category from "../../Pages/Categories/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            // {
            //     path: '/categories/:id',
            //     element: <CategoriesDetails></CategoriesDetails>,
            //     loader: ({ params }) => fetch(`https://consult-service-server.vercel.app/categories/${params._id}`)
            // }

        ]
    }

])
export default router;