import React from 'react';

const Offer = ({ offer }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={offer.img}
          alt="offer"
        />
      </figure>
    </div>
  );
};

export default Offer;
