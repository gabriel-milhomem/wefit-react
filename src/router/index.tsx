import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Cart, Success } from "../pages";
import { AppRoutes } from "./routes";

export function Router() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.HOME,
      element: <Home />,
    },
    {
      path: AppRoutes.CART,
      element: <Cart />,
    },
    {
      path: AppRoutes.SUCCESS,
      element: <Success />,
    },
  ]);

  return <RouterProvider router={router} />;
}
