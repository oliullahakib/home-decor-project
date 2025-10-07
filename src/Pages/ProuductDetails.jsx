import React from 'react';
import useProducts from '../Hooks/useProducts';
import { useParams } from 'react-router';

const ProuductDetails = () => {
    const { id } = useParams()
    const { products ,loading} = useProducts()
    const product = products.find(p => p.id === Number(id))
    if(loading) return <p>lodding...</p>
    const{name,description,image,price,material,dimensions,category,stock} =product
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3 text-gray-400">
                        {description}
                    </p>
                    <p><span className='font-bold'>Dimensions</span>: {dimensions}</p>
                    <p><span className='font-bold'>Material</span>: {material}</p>
                    <p className='text-3xl mt-3'><span className='font-bold '>Price</span>: ${price}</p>
                    <div className='my-5'>
                        <p ><span className='font-bold'>Category:</span>{category}</p>
                        <p className={`font-bold w-36 py-2 text-center rounded-2xl mt-3 ${stock?"bg-green-200":"bg-red-300"}`}>Stock {stock?"Available":"Out"}</p>
                    </div>
                    <button className="btn btn-secondary">Add To WishList</button>
                </div>
            </div>
        </div>
    );
};

export default ProuductDetails;