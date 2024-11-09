import FeaturesGrid from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";
import Layout from "@/Layout";
import NotFound from "@/pages/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
