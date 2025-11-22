import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root.jsx";
import HomeContent from "../layouts/Home.jsx";
import CartPage from "../pages/CartPage.jsx";


// New pages
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";

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

      // ⭐ Sign In Route
      {
        path: "/signin",
        element: <SignIn />,
      },

      // ⭐ Sign Up Route
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  // Optional fallback:
  {
    path: "*",
    element: <Root />,
  },
]);

export default router;
