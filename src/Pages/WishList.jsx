import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { getFromLS } from '../LDB/LDB';
import WishListCard from '../components/WishListCard';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MySwal = withReactContent(Swal)

const WishList = () => {
    const [wishlist, setWishlist] = useState([])
    const { products, loading } = useProducts()

    useEffect(() => {
        const WishListId = getFromLS()
        const wishProducts = products.filter(product => WishListId.includes(String(product.id)))
        setWishlist(wishProducts)
    }, [products])
    if (loading) return <p>Loading...</p>
    const handleDelete = (id) => {
        const wishListIdArr = getFromLS()
        const filteredWishListArr = wishListIdArr.filter(p => Number(p) !== id)
        localStorage.setItem("wishId", JSON.stringify(filteredWishListArr))

        const newWishList = products.filter(item => filteredWishListArr.includes(String(item.id)))
        setWishlist(newWishList)
        MySwal.fire({ title: "Item was Deleted", icon: "success" })
    }

    const handleShort = (e) => {
        if (e.target.value === "aesc") {
            const hightToLow = [...wishlist].sort((a, b) => b.price - a.price)
            setWishlist(hightToLow)
        }
        if (e.target.value === "desc") {
            const lowToHeigh = [...wishlist].sort((a, b) => a.price - b.price)
            setWishlist(lowToHeigh)
        }
        if (e.target.value === "none") {
            const WishListId = getFromLS()
            const wishProducts = products.filter(product => WishListId.includes(String(product.id)))
            setWishlist(wishProducts)

        }


    }

    // prosesing data for chart

    const totalByCategory = {}
    wishlist.forEach(product=>{
        const category = product.category
        totalByCategory[category]= (totalByCategory[category] || 0) + product.price
    })
    const data = Object.keys(totalByCategory).map(category=>({category,totalPrice:totalByCategory[category]}))
    return (
        <div className='w-11/12 mx-auto mt-4 '>
            <div>
                <label htmlFor="">Short Price:</label>
                <select onClick={(e) => handleShort(e)} className='outline rounded-xl ml-2 p-1' >
                    <option value={"none"}>None</option>
                    <option value={"desc"}>Low → Heigh </option>
                    <option value={"aesc"}>Heigh → Low</option>
                </select>
            </div>
            {
                wishlist.length === 0 ? <p className='flex text-3xl justify-center items-center col-span-3 font-semibold text-red-400 my-5'>Wish List is Empty !</p> : wishlist.map(product => <WishListCard key={product.id} product={product} handleDelete={handleDelete} />)
            }

            <div className='my-8'>
                <BarChart width={700} height={600} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"totalPrice"} fill='green' />
                </BarChart>
            </div>
        </div>
    );
};

export default WishList;