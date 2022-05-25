import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, setPurchase }) => {
  const { img, name, description, quantity, available, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Tools"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-3xl">{name}</h2>
        <h3 className='text-xl'>Minimum order quantity: {quantity}</h3>
        <h3 className='text-xl'>Available quantity: {available}</h3>
        <h3 className='text-xl'>Per unit Price: ${price}</h3>
        <h3>{description}</h3>
        <div className="card-actions justify-end">
          <Link to="/purchase"><button className="btn btn-primary">Purchase</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
