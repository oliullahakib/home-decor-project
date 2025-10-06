import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const { productsData } = useProducts()
    return (
        <div>
            <div className='flex justify-between w-11/12 mx-auto mt-8 md:pr-8'>
                <h2 className='text-2xl md:text-3xl '>All Products</h2>
                <div>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    productsData.map(product => <ProductCard key={product.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Products;