import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()
    const {productsData}=useProducts()
    const someProducts = productsData.slice(0,6)

    return (
        <div>
           <div className='flex justify-between w-11/12 mx-auto mt-8'>
            <h2 className='text-3xl '>Featured Products</h2>
            <button onClick={()=>navigate("/products")} className='btn btn-outline  font-semibold'>See All Products</button>
           </div>

           <div className='w-11/12 mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            someProducts.map(product=><ProductCard key={product.id} product={product} />)
           }

           </div>
        </div>
    );
};

export default Home;