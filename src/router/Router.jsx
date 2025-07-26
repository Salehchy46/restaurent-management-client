import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Login from "../components/pages/Login/Login";
import Menu from "../components/pages/Menu/Menu";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import SignUp from "../components/pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import FoodCard from "../components/pages/Menu/FoodCard";
import BookATable from "../components/pages/Home/BookATable";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1 className="text-center text-3xl min-h-dvh items-center">Route Not Found</h1>,
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
                path: '/menu',
                element: <PrivateRouter><Menu></Menu></PrivateRouter>
            },
            {
                path: '/menu/:id',
                element: <PrivateRouter><FoodCard></FoodCard></PrivateRouter>
            },
            {
                path: '/aboutus',
                element: <About></About>
            },
            {
                path: '/contactus',
                element: <Contact></Contact>
            },
            {
                path: '/bookatable',
                element: <BookATable></BookATable>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router;