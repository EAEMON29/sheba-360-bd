import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root.jsx";
import HomeContent from "../layouts/Home.jsx";
import CartPage from "../pages/CartPage.jsx";

// New pages
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";

// Extra pages
import Menu from "../pages/Menu.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/signin",
        element: <SignIn />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },

      // ⭐ New Routes
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  // fallback
  {
    path: "*",
    element: <Root />,
  },
]);

export default router;
