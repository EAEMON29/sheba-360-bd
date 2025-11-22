import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root ,
        children: [
            {
                path:"/",
                Component: Home
            }
        ]
    }
])


export default router