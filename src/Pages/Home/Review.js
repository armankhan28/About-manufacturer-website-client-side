import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
        <div className="rating rating-lg">
          <input type="radio" name="rating-9" className="rating-hidden" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input
            type="radio"
            name="rating-9"
            className="mask mask-star-2"
            checked
          />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
        </div>
      </div>
    </div>
  );
};

export default Review;
