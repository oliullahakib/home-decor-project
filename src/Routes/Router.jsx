import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/products",
                Component:Products
            },
            {
                path:"/wishlist",
                Component:WishList
            }
        ]
    }
])