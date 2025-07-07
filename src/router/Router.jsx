import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <h1 className="text-center text-3xl min-h-dvh items-center">Route Not Found</h1>,
    }
])

export default router;