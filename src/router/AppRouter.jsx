import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import ServiceDetails from "../pages/ServiceDetails";
import ServicePayment from "../pages/ServicePayment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        children: [
          { path: "", element: <Services /> },
          {
            path: ":service",
            children: [
              { path: "", element: <Services /> },
              { path: ":details", element: <ServiceDetails /> },
            ],
          },
        ],
      },
      {
        path: "services/payment",
        element: <ServicePayment />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
