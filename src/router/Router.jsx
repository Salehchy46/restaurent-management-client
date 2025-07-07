import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1 className="text-center text-3xl min-h-dvh items-center">Route Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;