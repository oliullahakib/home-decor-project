import React from 'react';
import { useNavigate } from 'react-router';

const WishListCard = ({ product,handleDelete }) => {
    const navigate = useNavigate()
    const { name, image, id, category,stock,price } = product
    
    return (
        <div className="card bg-base-100 flex-col sm:flex-row shadow-sm p-5 mt-3">
            <figure>
                <img
                    className='rounded-xl sm:w-20'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body sm:flex-row justify-between">
                <div>
                    <h2 className=" text-2xl">{name}</h2>
                    <div className='flex items-center gap-3 mt-3'>
                        <div className="badge badge-secondary">{category}</div>
                         <p className={`font-bold w-36 py-2 text-center rounded-2xl  ${stock?"bg-green-200":"bg-red-300"}`}>Stock {stock?"Available":"Out"}</p>
                    </div>
                    <p className='text-lg'><span className='font-bold '>Price</span>: ${price}</p>
                </div>
                <div className="card-actions  justify-end">
                    <button onClick={() => navigate(`/details/${id}`)} className="btn btn-primary">Details</button>
                    <button onClick={() => handleDelete(id)} className="btn btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;