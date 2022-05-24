import React from 'react';
import offer1 from '../../Images/h9-single-banner-img-1.jpg'
import offer2 from '../../Images/h9-single-banner-img-2.jpg'
import offer3 from '../../Images/h9-single-banner-img-3.jpg'
import Offer from './Offer';

const Offers = () => {
    const offers = [
        {
            _id:1,
            img: offer1
        },
        {
            _id:2,
            img: offer2
        },
        {
            _id:3,
            img: offer3
        },
    ]
    return (
        <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                offers.map(offer =><Offer
                key={offer._id}
                offer={offer}
                ></Offer>)
            }
        </div>
    );
};

export default Offers;