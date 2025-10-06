import React from 'react';

const ProductCard = ({product}) => {
    const {name,image,description,price,stock,category} =product
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-5">
            <figure>
                <img
                    className='rounded-xl'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                  <div className="badge badge-secondary">{category}</div>
                <div>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <p className={`font-bold w-36 py-2 text-center rounded-2xl mt-3 ${stock?"bg-green-200":"bg-red-300"}`}>Stock {stock?"Available":"Out"}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;