import React from 'react';
import useProducts from '../Hooks/useProducts';
import { useParams } from 'react-router';

const ProuductDetails = () => {
    const { id } = useParams()
    const { products ,loading} = useProducts()
    const product = products.find(p => p.id === Number(id))
    if(loading) return <p>lodding...</p>
    console.log(product)
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={product?.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{product?.name}</h1>
                    <p className="py-3">
                        {product?.description}
                    </p>
                    <p><span className='font-bold'>Dimensions</span>: {product?.dimensions}</p>
                    <p><span className='font-bold'>Material</span>: {product?.material}</p>
                    <p className='text-3xl'><span className='font-bold '>Price</span>: ${product?.price}</p>
                    <button className="btn btn-primary">Add To WishList</button>
                </div>
            </div>
        </div>
    );
};

export default ProuductDetails;