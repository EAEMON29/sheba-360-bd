import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// FIX: createBrowserRouter and RouterProvider must be imported from react-router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 

import App from './App.jsx' // Note: This App component should only contain the layout (Navbar, Footer, etc.)

// --- Dummy Router Setup for Compilation (Tomar original code thik korar jonno) ---
// Note: In a real project, this should be imported from './Router.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App component is rendered by the router
    },
]);
// ----------------------------------------------------------------------------------


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* FIX: RouterProvider is the main render component now */}
        <RouterProvider router={router} />
    </StrictMode>
);