import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import("../layout/HomeLayout"));
const MarketplaceHome = lazy(() => import("../pages/MarketplaceHome"));
const MarketplaceHomeDetails = lazy(() =>
  import("../pages/MarketplaceHomeDetails")
);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
         <Route path="/marketplace" element={<MarketplaceHome />} />
        <Route path="/marketplace/:id" element={<MarketplaceHomeDetails />} />
       
      </Route>
      
    </Route>
  )
);

const AllRoutes = () => {
  return (
    <div className="mx-auto bg-primary/50 font-opensans max-w-[1512px] text-[#0F160F]">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default AllRoutes;
