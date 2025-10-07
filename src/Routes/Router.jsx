import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import WishList from "../Pages/WishList";
import ProuductDetails from "../Pages/ProuductDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/products",
                Component: Products
            },
            {
                path: "/wishlist",
                Component: WishList
            },
            {
                path: "/details/:id",
                Component: ProuductDetails

            },

        ]
    }
])