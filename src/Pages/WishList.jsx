import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { getFromLS } from '../LDB/LDB';
import ProductCard from '../components/ProductCard';
import WishListCard from '../components/WishListCard';

const WishList = () => {
    const [wishlist, setWishlist] = useState([])
    const {products,loading}=useProducts()
    useEffect(() => {
        const WishListId =  getFromLS()
        const wishProducts = products.filter(product=>WishListId.includes(String(product.id)))
        setWishlist(wishProducts)
    }, [products])
    if(loading) return <p>Loading...</p>
    const handleDelete=(id)=>{
        const wishListIdArr=getFromLS()
        const filteredWishListArr= wishListIdArr.filter(p=>Number(p)!==id)
        localStorage.setItem("wishId",JSON.stringify(filteredWishListArr))

        const newWishList = products.filter(item=>filteredWishListArr.includes(String(item.id)))
        setWishlist(newWishList)
    }
    
    return (
        <div className='w-11/12 mx-auto mt-4 '>
            {
              wishlist.length===0? <p className='flex text-3xl justify-center items-center col-span-3 font-semibold text-red-400 my-5'>Wish List is Empty !</p> :  wishlist.map(product=><WishListCard key={product.id} product={product} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default WishList;