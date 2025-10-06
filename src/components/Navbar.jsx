import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-3 shadow">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/products"}>Products</NavLink>
                        <NavLink to={"/wishlist"}>WishList</NavLink>
                        <Link className="btn " to={"/"} >Visit Shop</Link>
                    </ul>
                </div>
                <Link to={"/"} className=" text-xl">HomeDcor</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-4 px-1">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/products"}>Products</NavLink>
                    <NavLink to={"/wishlist"}>WishList</NavLink>
                    <Link className="btn " to={"/"} >Visit Shop</Link>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;